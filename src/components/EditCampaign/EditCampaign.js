import React, { Component } from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import line from "../../assets/images/line.svg";
import FormInputField from "../../sharedComponent/form";
import AlertDialog from "../../sharedComponent/AlertDialog";
import { campaignRequest } from "../../store/campaignModules/saga";
import { validateInput, IMAGE_URL, validate } from "../../utils/misc";
import ImageUpload from "../../sharedComponent/ImageUpload";
import { isRequestActive } from "../../utils/misc";
import LoadableButton from "../../sharedComponent/LoadableButton";

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
                    value: isEdit ? editCampaign.donationAmt : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Donation Amount (N)",
                    rules: {
                        required: true
                    }
                },
                rewardType: {
                    value: isEdit ? editCampaign.rewardType : "",
                    error: isEdit ? false : null,
                    errorMessage: "",
                    name: "Reward Type",
                    rules: {
                        required: true
                    }
                },
                reward: {
                    value: isEdit ? editCampaign.reward : "",
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

    componentDidUpdate(prevProps, prevState) {
        if(Object.keys(this.props.editCampaign).length === 0)
        this.props.history.push("/profile", { redirectFromCampaign: true })

        const {
            utils: { utils },
            campaignSuccess,
            createdCampaign
        } = this.props;
        if (
            campaignSuccess !== false &&
            createdCampaign.hasOwnProperty("campaign_id")
        ) {
            if (this.state.step === 3) return null;
            this.setState({
                step: 3
            });
        }
    }

    componentWillUnmount() {
        let newState = { ...this.state };
        Object.keys(newState.fields).map(key => {
            newState.fields[key].value = "";
            newState.fields[key].error = null;
            newState.fields[key].errorMessage = "";
        });
        this._safelySetState(newState);
        this.props.userEditCampaign({});
        this.props.userCreateCampaign({});
    }

    setImage = image => {
        this.setState({ image });
    };

    triggerCampaignAction = e => {
        e.preventDefault();
        /*
        if (!validateInput(this.state.fields)) {
          console.log(1)
          return this._safelySetState({
            formError: true
          });
        }
        */
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

    render() {
        const { image, rewardFields, fields } = this.state;
        const { utils, categories, orgTypes } = this.props;
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

        const form1 = {};
        const form2 = {};

        for (var key in this.state.fields) {

            if (key === "goal" || key === "title" || key === "category" || key === "affiliatedOrganization") {

                form1[key] = this.state.fields[key];

            } else if (key === "summary" || key === "campaign_details" || key === "types") {

                form2[key] = this.state.fields[key];

            }

        }
        
        const validate1 = validate.bind(this, this, form1);
        const validate2 = validate.bind(this, this, form2);
        return (
            <>
                <AlertDialog
                    open={
                        utils.feedback.for === campaignRequest.userCampaignRequest ||
                        utils.feedback.for === campaignRequest.uploadCampaignImageRequest
                    }
                    message={utils.feedback.message}
                    success={utils.feedback.success}
                />
                <div className="edit__campaign">
                    <div className="edit__campaign-head">
                        <div className="edit__campaign-head-title">
                            Edit Campaign
                        </div>
                        {/*<div className="edit__campaign-heade-2">
                            <span className="edit__campaign-close">Close Donations</span>
                            <img src={line} alt="line" className="edit__campaign-line" />
                            <span className="edit__campaign-delete">Delete Campaign</span>
                        </div>*/}
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
                                <form>
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
                                </form>
                            </div>
                        </div>
                    </div>

                    {/*<div className="campaign__rewards">
                        <h3 className="campaign__info-title">Campaign Rewards</h3>
                        <hr className="campaign-hr" />
                        <div className="campaign__reward-body">
                            <div className="campaign__reward-desc">
                                Relevant document include national ID card,
                                 National Voters card, National Passport, Drivers License.
                            </div>
                            <div className="campaign__reward-form">
                                <form method="post">
                                    <div className="reward-form">
                                        <div className="reward">
                                            <div className="createCampaign_form">
                                                <FormInputField
                                                    type="select"
                                                    name="rewardType"
                                                    value={rewardType.value}
                                                    form={this.state.rewardFields}
                                                    onBlur={this.onBlur}
                                                    options={orgTypesItem}
                                                    labelTitle="T-shirt or something"
                                                    onChange={this._handleChange}
                                                    className="editCampaign_form-select createCampaign_form-type editCampaign_form-round"
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
                                                    labelTitle="CAMPAIGN SUMMARY"
                                                    labelRight="0 / 50"
                                                    className="editReward-summary"
                                                />
                                            </div>
                                        </div>
                                        <div className="reward2">
                                            <div className="createCampaign_form">
                                                <FormInputField
                                                    type="number"
                                                    name="donationAmt"
                                                    value={donationAmt.value}
                                                    onBlur={this.onBlur}
                                                    form={this.state.rewardFields}
                                                    required
                                                    validate={validate1}
                                                    onChange={this._handleChange}
                                                    labelTitle="DONATION AMOUNT (N)"
                                                    placeholder="N5, 000.00"
                                                    className="editCampaign-amt"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="reward-hr" />
                                    <div className="reward-form-2">
                                        <div className="reward">
                                            <div className="createCampaign_form">
                                                <FormInputField
                                                    type="select"
                                                    name="rewardType"
                                                    value={rewardType.value}
                                                    form={this.state.rewardFields}
                                                    onBlur={this.onBlur}
                                                    options={orgTypesItem}
                                                    labelTitle="T-shirt or something"
                                                    onChange={this._handleChange}
                                                    className="editCampaign_form-select createCampaign_form-type editCampaign_form-round"
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
                                                    labelTitle="CAMPAIGN SUMMARY"
                                                    labelRight="0 / 50"
                                                    className="editReward-summary"
                                                />
                                            </div>
                                        </div>
                                        <div className="reward2">
                                            <div className="createCampaign_form">
                                                <FormInputField
                                                    type="number"
                                                    name="donationAmt"
                                                    value={donationAmt.value}
                                                    onBlur={this.onBlur}
                                                    form={this.state.rewardFields}
                                                    required
                                                    validate={validate1}
                                                    onChange={this._handleChange}
                                                    labelTitle="DONATION AMOUNT (N)"
                                                    placeholder="N5, 000.00"
                                                    className="editCampaign-amt"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="save_reward">
                                        <div>
                                            <LoadableButton
                                                error={this.formError}
                                                className="edit_save-btn"
                                                btnTitle="Save Changes"
                                            />
                                        </div>
                                        <div>
                                            <LoadableButton
                                                error={this.formError}
                                                className="add_reward-btn"
                                                btnTitle="Add Reward"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </>
        )
    }
}

export default EditCampaign;