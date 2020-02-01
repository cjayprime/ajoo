import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import FormInputField from "../../sharedComponent/form";
import AlertDialog from "../../sharedComponent/AlertDialog";
import ImageUpload from "../../sharedComponent/ImageUpload";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { campaignRequest } from "../../store/campaignModules/saga";

import { IMAGE_URL, validate, isRequestActive } from "../../utils/misc";

import CloseDonations from "./CloseDonations";
import DeleteCampaign from "./DeleteCampaign";

const preImage = `${IMAGE_URL}363_232_`;

class EditCampaign extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        const { editCampaign } = props;
        let isEdit =
            !!editCampaign &&
            Object.keys(editCampaign).length > 0 &&
            !!editCampaign._id;
        this.isEdit = isEdit;
        this.editCampaign = editCampaign;

        this.state = {
            formError: false,
            image: isEdit ? `${preImage}${editCampaign.imageUrl}` : "",
            //rewards: [],
            donation: false,
            mode: "add",
            column: {},
            fields: {
                title: {
                    value: isEdit ? editCampaign.title : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Title",
                    rules: {
                        required: true
                    }
                },
                goal: {
                    value: isEdit ? editCampaign.amount : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Campaign Goal",
                    rules: {
                        required: true
                    }
                },
                summary: {
                    value: isEdit ? editCampaign.summary : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Campaign Summary",
                    rules: {
                        required: true
                    }
                },
                campaign_details: {
                    value: isEdit ? editCampaign.description : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Campaign Description",
                    rules: {
                        required: true
                    }
                },
                category: {
                    value: isEdit ? editCampaign.category : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Category",
                    rules: {
                        required: true
                    }
                },
                affiliatedOrganization: {
                    value: isEdit ? editCampaign.category : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Affiliated Organization",
                    rules: {
                        required: false
                    }
                },
                rewards: {
                    value: isEdit ? editCampaign.rewards : "",
                    error: isEdit ? false : false,
                    errorMessage: "",
                    name: "Rewards",
                    rules: {
                        required: true
                    }
                },
                types: {
                    value: isEdit ? editCampaign.title : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Type of Campaign",
                    rules: {
                        required: true
                    }
                }
            },
            rewardFields: {
                donationAmt: {
                    value: "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Donation Amount (N)",
                    rules: {
                        required: true
                    }
                },
                rewardType: {
                    value: "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Reward Type",
                    rules: {
                        required: true
                    }
                },
                reward: {
                    value: "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "reward",
                    rules: {
                        required: true,
                        maxLength: 50
                    }
                }
            }
        };
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentDidUpdate() {

        if(Object.keys(this.props.editCampaign).length === 0)
        this.props.history.push("/profile", { redirectFromCampaign: true })

    }

    setMode = (mode, column) => {

        var donationAmt = "";
        var rewardType = "";
        var reward = "";
        if(mode === "edit"){
            donationAmt = column.donation;
            rewardType = column.rewardType;
            reward = column.reward;
        }

        this.setState({
            mode,
            column,
            rewardFields: {
                ...this.state.rewardFields,
                donationAmt:{
                    ...this.state.rewardFields.donationAmt,
                    value: donationAmt
                },
                rewardType:{
                    ...this.state.rewardFields.rewardType,
                    value: rewardType
                },
                reward:{
                    ...this.state.rewardFields.reward,
                    value: reward
                }
            }
        });

    };

    deleteReward = (column) => {
        const { getReward, deleteReward, editCampaign } = this.props;

        deleteReward({
          id: column._id,
          success: () => {
              this.setMode("add")
              getReward({id: editCampaign._id});
          }
        });
    }

    editReward = () => {
        const { donationAmt, rewardType, reward } = this.state.rewardFields;
        const { getReward, editReward, editCampaign } = this.props;
        
        if(validate(this, this.state.rewardFields))
        editReward({
            data: {
                donation:     donationAmt.value,
                reward_type:  rewardType.value,
                reward:       reward.value
            },
            id: this.state.column._id,
            success: () => {
                this.setMode("add")
                getReward({id: editCampaign._id});
            }
        });
    }

    addReward = () => {
        const { donationAmt, rewardType, reward } = this.state.rewardFields;
        const { getReward, addReward, editCampaign } = this.props;
        
        if(validate(this, this.state.rewardFields))
        addReward({
            data: {
                campaign:     editCampaign._id,
                donation:     donationAmt.value,
                reward_type:  rewardType.value,
                reward:       reward.value
            },
            success: () => {
                this.setMode("add")
                getReward({id: editCampaign._id});
            }
        });
    }

    setImage = image => {
        this.setState({ image });
    };

    triggerCampaignAction = e => {
        e.preventDefault();
        let data = {};
        Object.keys(this.state.fields).map(key => {
            data[key] = this.state.fields[key].value;
        });

        if (this.isEdit) {
            return this.props.userEditCampaign({
                data,
                campaignId: this.editCampaign._id
            });
        }
        this.props.userCreateCampaign({ data });
    };

    triggerImageUpload = (e) => {

        e.preventDefault();
        
        const { image } = this.state;
        const { editCampaign, createdCampaign, showPercentageProgress, history } = this.props;

        if (
            this.isEdit &&
            this.editCampaign.imageUrl &&
            image === `${preImage}${this.editCampaign.imageUrl}`
        ) {
            //return history.push(
             //   `/campaign/${this.editCampaign.campaign_id.toLowerCase()}`
            //)
            this.props.showRequestFeedBack({
              message: "You need to select an image first!",
              for: campaignRequest.uploadCampaignImageRequest,
              success: false
            });

            return;
        }

        if (!image || !editCampaign.hasOwnProperty("campaign_id")) {
            return this._safelySetState({
                formError: true
            });
        }
        
        this.props.uploadCampaignImage({
            data: {
                image,
                id: editCampaign._id
            },
            createdCampaign: editCampaign,
            history,
            showPercentageProgress
        });
    };

    _handleChange = (e, text) => {
        let newState = { ...this.state };
        newState.formError = false;
        if (text && text.hasOwnProperty("name")) {
            const { name, data } = text;
            newState.fields[name].error = false;
            newState.fields[name].value = data;
            this._safelySetState(newState);
            return;
        }
        const { name, value } = e.target;
        if (newState.rewardFields.hasOwnProperty(name)) {
            newState.rewardFields[name].error = false;
            newState.rewardFields[name].value = value;
        } else {
            newState.fields[name].error = false;
            newState.fields[name].value = value;
        }
        this._safelySetState(newState);

        validate(this, this.state.fields, e);
    };

    onBlur = (res, name) => {
        const { error, errorMessage } = res;
        let newForm = { ...this.state };
        if (newForm.rewardFields.hasOwnProperty(name)) {
            newForm.rewardFields[name] = {
                ...newForm.rewardFields[name],
                error,
                errorMessage
            };
        } else {
            newForm.fields[name] = {
                ...newForm.fields[name],
                error,
                errorMessage
            };
        }

        this._safelySetState(newForm);
    };

    _safelySetState = (newState, prevState = null) => {
        if (this._isMounted)
            return this.setState(state => ({
                [prevState]: !state[prevState],
                ...newState
            }));
    };

    toggle = () => {

        this.setState({ donation: ! this.state.donation });

    }

    render() {
        const { /*image, */rewardFields, fields } = this.state;
        const { utils, categories, orgTypes, rewards, editCampaign, history } = this.props;
        const
            { goal,
                title,
                category,
                affiliatedOrganization,
                summary,
                types,
                campaign_details
            } = fields;

        const { donationAmt, rewardType, reward } = rewardFields;

        const categoriesItem = categories.map(item => (
            <option value={item} key={item}>
                {item}
            </option>
        ));

        const orgTypesItem = orgTypes.map(type => (
            <option value={type} key={type}>
                {type}
            </option>
        ));
        

        const forms = Object.assign(this.state.fields, this.state.rewardFields);
        const form1 = {};
        const form2 = {};
        const form3 = {};
        
        for(var key in forms){

            if(key === "goal" || key === "title" || key === "category" || key === "affiliatedOrganization"){
                
                form1[key] = forms[key];
                
            }else if(key === "summary" || key === "campaign_details" || key === "types"){
                
                form2[key] = forms[key];
                
            }else if(key === "donationAmt" || key === "rewardType" || key === "reward"){
                
                form3[key] = forms[key];
                
            }

        }
        
        const validate1 = validate.bind(this, this, form1);
        //const validate2 = validate.bind(this, this, form2);
        const validate3 = validate.bind(this, this, form3);

        return (
            <>
                <AlertDialog
                    open={
                        utils.feedback.for === campaignRequest.userCampaignRequest ||
                        utils.feedback.for === campaignRequest.uploadCampaignImageRequest ||
                        utils.feedback.for === campaignRequest.addRewardRequest ||
                        utils.feedback.for === campaignRequest.editRewardRequest ||
                        utils.feedback.for === campaignRequest.deleteRewardRequest
                    }
                    message={utils.feedback.message}
                    success={utils.feedback.success}
                />
                
                <CloseDonations {...this.props} toggle={this.toggle} open={this.state.donation}/>
                
                <DeleteCampaign {...this.props}  toggle={() => {}} open={false}/>

                <div className="edit__campaign">
                    <div className="edit__campaign-head">
                        <div className="edit__campaign-head-title">
                            Edit Campaign
                        </div>
                        <div className="edit__campaign-heade-2">
                            {
                                true
                                ?   <>
                                        <span className="edit__campaign-close" onClick={this.toggle} style={{ cursor: "pointer" }}>
                                            Close Donations
                                        </span>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAjCAYAAABVcWC0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgB1cQxDQAADAKwZsonHWzwFP6KCQJtbQDFuhliogAAAABJRU5ErkJggg==" alt="line" className="edit__campaign-line" />
                                        <span className="edit__campaign-delete" onClick={() => {}} style={{ cursor: "pointer" }}>
                                            Delete Campaign
                                        </span>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAjCAYAAABVcWC0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAaSURBVHgB1cQxDQAADAKwZsonHWzwFP6KCQJtbQDFuhliogAAAABJRU5ErkJggg==" alt="line" className="edit__campaign-line" />
                                        <span className="edit__campaign-delete" onClick={() => {

                                            history.push({
                                                pathname: "/close_campaign",
                                                state: { campaign: editCampaign }
                                            });

                                        }} style={{ cursor: "pointer" }}>
                                            Close Campaign
                                        </span>
                                    </>
                                :   <span className="edit__campaign-delete" onClick={() => {

                                        history.push({
                                            pathname: "/close_campaign",
                                            state: { campaign: editCampaign }
                                        });

                                    }} style={{ cursor: "pointer" }}>
                                        Close Campaign
                                    </span>
                            }
                        </div>
                    </div>







                    <div className="campaign__info">
                        <h3 className="campaign__info-title">Campaign Info</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign__info-body">
                            <div className="campaign__info-desc">
                                All Social account information are needed for the following reasons. like blah blah blah..
                                 some content will go here explaining why this entire process is necessary and how it helps for verification.
                            </div>
                            <div className="campaign__info-form">
                                <form method="post">
                                    <div className="createCampaign_form">
                                        <FormInputField
                                            type="number"
                                            placeholder="N 4,000,000"
                                            name="goal"
                                            value={goal.value}
                                            onBlur={this.onBlur}
                                            form={this.state.fields}
                                            required
                                            validate={validate1}
                                            onChange={this._handleChange}
                                            labelTitle="CAMPAIGN GOAL"
                                            className="createCampaign_form-goal"
                                        />
                                    </div>
                                    <div className="createCampaign_form">
                                        <FormInputField
                                            type="text"
                                            placeholder="Something Something"
                                            name="title"
                                            value={title.value}
                                            form={this.state.fields}
                                            required
                                            validate={validate1}
                                            onBlur={this.onBlur}
                                            onChange={this._handleChange}
                                            labelTitle="CAMPAIGN TITLE"
                                            className="createCampaign_form-title"
                                        />
                                    </div>
                                    <div className="createCampaign_form">
                                        <FormInputField
                                            type="select"
                                            name="category"
                                            value={category.value}
                                            form={this.state.fields}
                                            required
                                            validate={validate1}
                                            onBlur={this.onBlur}
                                            options={categoriesItem}
                                            labelTitle="category"
                                            onChange={this._handleChange}
                                            className="edit__campaign-select"
                                        />
                                    </div>
                                    <div className="createCampaign_form">
                                        <FormInputField
                                            type="text"
                                            placeholder={category.value ? category.value : "Medical"}
                                            name="affiliatedOrganization"
                                            value={affiliatedOrganization.value}
                                            form={this.state.fields}
                                            required
                                            validate={validate}
                                            /*onBlur={onBlur}*/
                                            onChange={this._handleChange}
                                            labelTitle="AFFILIATED ORGANIZATION"
                                            className="createCampaign_form-title"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>










                    <div className="campaign__feature-image">
                        <h3 className="campaign__info-title">Campaign Feature Image</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign__feature-body">
                            <div className="campaign__feature-desc">
                                Some text will going here most likely describing the kinds of images that are expected to be uploaded from.
                                Suggestions are welcome and will be very helpful for anyone involved.
                            </div>
                            <div className="campaign__feature-form">
                                <div style={{ height: 260, width: 260, marginTop: 30, marginLeft: 25 }}>
                                    <ImageUpload
                                        image={this.state.image}
                                        setImage={this.setImage}
                                        fileUploadProgress={utils.fileUploadProgress}
                                        editImageUrl={this.editCampaign && this.editCampaign.imageUrl}
                                        isUploading={
                                            isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                                        }
                                    />
                                </div>
                                <div style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                                    <LoadableButton
                                        error={
                                            false
                                            /*formError &&
                                            "There is something wrong! Ensure you've added a campaign"*/
                                        }
                                        className="edit__camp-img-btn"
                                        btnTitle="Change Feature Image"
                                        isLoading={
                                            isRequestActive(utils.request, campaignRequest.uploadCampaignImageRequest)
                                        }
                                        onClick={this.triggerImageUpload}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>














                    <div className="campaign_description">
                        <h3 className="campaign__info-title">Campaign Description</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign__desc-body">
                            <div className="campaign__desc-desc">
                                Relevant document include national ID card, National Voters card,
                                 National Passport, Drivers License.
                            </div>
                            <div className="campaign__desc-form">
                                <div className="createCampaign_form">
                                    <FormInputField
                                        type="textarea"
                                        name="summary"
                                        value={summary.value}
                                        onBlur={this.onBlur}
                                        form={this.state.fields}
                                        maxlength="50"
                                        style={{ resize: "none" }}
                                        onChange={this._handleChange}
                                        labelTitle="CAMPAIGN SUMMARY"
                                        labelRight="0 / 50"
                                        className="createCampaign_form-summary"
                                    />
                                </div>
                                <div className="createCampaign_form">
                                    <FormInputField
                                        type="select"
                                        name="types"
                                        value={types.value}
                                        form={this.state.fields}
                                        onBlur={this.onBlur}
                                        options={orgTypesItem}
                                        labelTitle="type of campaign"
                                        onChange={this._handleChange}
                                        className="editCampaign_type-select editCampaign_type-type editCampaign_type-round"
                                    />
                                </div>
                                <div className="createCampaign_form">
                                    <label className="createCampaign_desc" style={{ color: campaign_details.error ? "red" : "inherit" }}>
                                        {campaign_details.error ? campaign_details.errorMessage : 'Campaign Description'}
                                    </label>
                                    <div className="createCampaign_form-textarea">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={campaign_details.value}
                                            onInit={editor => {
                                                this._handleChange(null, {
                                                    name: "campaign_details",
                                                    data: this.isEdit ? this.editCampaign.description : ""
                                                });
                                            }}
                                            name="campaign_details"
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                this._handleChange(event, { name: "campaign_details", data });
                                            }}
                                            config={{
                                                ckfinder: {
                                                    uploadUrl: `/pdf/uploadImage`
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="verificationbutton_center">
                                    <LoadableButton
                                        onClick={this.triggerCampaignAction}
                                        className="edit-desc-btn"
                                        btnTitle="Save Changes"
                                        isLoading={
                                            isRequestActive(utils.request, campaignRequest.userCampaignRequest)
                                        }
                                        type="submit"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>










                    <div className="campaign__rewards">
                        <h3 className="campaign__info-title">Campaign Rewards</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign__reward-body">
                            <div className="campaign__reward-desc">
                                Relevant document include national ID card,
                                 National Voters card, National Passport, Drivers License.
                            </div>
                            <div className="campaign__reward-form">
                                <div className="createCampaign_form">
                                    <FormInputField
                                        type="select"
                                        name="rewardType"
                                        value={rewardType.value}
                                        form={this.state.rewardFields}
                                        onBlur={this.onBlur}
                                        options={[<option key={1}>Material</option>, <option key={2}>Non-material</option>]}
                                        labelTitle="REWARD TYPE"
                                        validate={validate3}
                                        onChange={this._handleChange}
                                        className="editCampaign_type-select editCampaign_type-type editCampaign_type-round"
                                    />
                                </div>
                                <div className="createCampaign_form">
                                    <FormInputField
                                        type="textarea"
                                        name="reward"
                                        value={reward.value}
                                        onBlur={this.onBlur}
                                        form={this.state.rewardFields}
                                        maxlength="50"
                                        style={{ resize: "none" }}
                                        onChange={this._handleChange}
                                        labelTitle="REWARD"
                                        validate={validate3}
                                        labelRight={reward.value.length + " / 50"}
                                        className="createCampaign_form-summary"
                                    />
                                </div>
                                <div className="createCampaign_form">
                                    <FormInputField
                                        type="number"
                                        name="donationAmt"
                                        value={donationAmt.value}
                                        onBlur={this.onBlur}
                                        form={this.state.rewardFields}
                                        required
                                        validate={validate3}
                                        onChange={this._handleChange}
                                        labelTitle="DONATION AMOUNT (N)"
                                        placeholder="N5, 000.00"
                                        className="editCampaign-amt"
                                        className="createCampaign_form-title"
                                    />
                                </div>
                                <div className="save_reward">
                                    <div>
                                        <LoadableButton
                                            error={this.formError}
                                            className="edit_save-btn"
                                            btnTitle="Reset"
                                            onClick={() => this.setMode("add")}
                                        />
                                    </div>
                                    <div>
                                        <LoadableButton
                                            error={this.formError}
                                            className="add_reward-btn"
                                            onClick={() => this.state.mode === "edit" ? this.editReward() : this.addReward()}
                                            btnTitle={(this.state.mode === "edit" ? "Edit" : "Add") + " Reward"}
                                            isLoading={
                                                isRequestActive(utils.request, campaignRequest.addRewardRequest)    ||
                                                isRequestActive(utils.request, campaignRequest.editRewardRequest)   ||
                                                isRequestActive(utils.request, campaignRequest.deleteRewardRequest)
                                            }
                                        />
                                    </div>
                                </div>
                                {
                                    rewards.length
                                    ? 
                                        <>
                                            <hr className="campaign-hr" style={{ width: "auto", marginLeft: 0, marginTop: 50, marginBottom: 50 }} />
                                            <div style={{ width: "auto", overflow: "hidden", overflowX: "auto" }}>
                                                <table cellPadding="20" style={{ width: "100%", tableLayout: "fixed", borderCollapse: "collapse", borderRadius: 5, background: "#FFF", boxShadow: "1px 1px 4px -1px" }}>
                                                    <thead>
                                                        <tr>
                                                            <td style={{ width: "25%" }}><b>REWARD TYPE</b></td>
                                                            <td style={{ width: "25%" }}><b>REWARD</b></td>
                                                            <td style={{ width: "25%" }}><b>DONATION AMOUNT (N)</b></td>
                                                            <td style={{ width: "5%" }}></td>
                                                            <td style={{ width: "5%" }}></td>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ verticalAlign: "bottom" }}>
                                                    {
                                                        rewards.map((v, i) => 
                                                            <tr key={i} style={{ borderBottom: "1px solid #ccc", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "pre" }}>
                                                                <td style={{ padding: 20, overflow: "hidden", textOverflow: "ellipsis", width: "25%" }}>{v.rewardType}</td>
                                                                <td style={{ padding: 20, overflow: "hidden", textOverflow: "ellipsis", width: "25%" }}>
                                                                    {v.reward}
                                                                </td>
                                                                <td style={{ padding: 20, overflow: "hidden", textOverflow: "ellipsis", width: "25%" }}>
                                                                    {v.donation}
                                                                </td>
                                                                <td style={{ width: "5%" }} onClick={() => this.setMode("edit", v)}>
                                                                    <EditIcon style={{cursor: "pointer"}} />
                                                                </td>
                                                                <td style={{ width: "5%" }} onClick={() => this.deleteReward(v)}>
                                                                    <DeleteIcon style={{cursor: "pointer", fill: "red"}} />
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default EditCampaign;