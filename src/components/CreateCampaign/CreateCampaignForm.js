import React, { Component } from "react";

import CreateCampaignForm1 from "./createCampaignForm1";
import CreateCampaignForm2 from "./createCampaignForm2";
import { campaignRequest } from "../../store/campaignModules/saga";
import { IMAGE_URL, validate } from "../../utils/misc";
import CampaignFeatureImage from "./UploadCampaignImage";
import CampaignFeatureImages from "./UploadCampaignImages";
import RewardForm from "./rewardForm";

const preImage = `${IMAGE_URL}363_232_`;

class CreateCampaignForm extends Component {
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
      step: 1,
      formError: false,
      image: isEdit ? `${preImage}${editCampaign.imageUrl}` : "",
      rewards: [],
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
          name: "Reward",
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

  setRewardForm = reward => {
    this.setState({reward});
  };

  setImage = (image, imageNumber, success) => {
    this.setState({ image });

    if(imageNumber)
    this.triggerImageUpload(imageNumber, success);
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  triggerCampaignAction = (e, success) => {
    e.preventDefault();

    let data = {};
    Object.keys(this.state.fields).map(key => {
      data[key] = this.state.fields[key].value;
    });

    if (this.isEdit) {
      return this.props.userEditCampaign({
        data,
        campaignId: this.editCampaign._id,
        success
      });
    }
    this.props.userCreateCampaign({ data, success });
  };

  triggerImageUpload = (imageNumber, success) => {
    const { image } = this.state;
    const { createdCampaign, showPercentageProgress, history } = this.props;

    if (
      this.isEdit &&
      this.editCampaign.imageUrl &&
      image === `${preImage}${this.editCampaign.imageUrl}`
    ) {
      console.log('111')
      return history.push(
        `/campaign/${this.editCampaign.campaign_id.toLowerCase()}`
      );
    }

    if (!image || !createdCampaign.hasOwnProperty("campaign_id")) {
      return this._safelySetState({
        formError: true
      });
    }
    
    this.props.uploadCampaignImage({
      data: {
        image,
        id: createdCampaign._id
      },
      createdCampaign,
      history,
      showPercentageProgress,
      imageNumber,
      success
    });

  };

  triggerSaveRewardAction = success => {
    
    const { createdCampaign } = this.props;

    this.props.addReward({
      data: {
        campaign:     createdCampaign._id,
        donation:     this.state.rewardFields.donationAmt.value,
        reward_type:  this.state.rewardFields.rewardType.value,
        reward:       this.state.rewardFields.reward.value
      },
      success
    });

  };

  saveRewardSuccess = () => {
    
    var rewards = this.state.rewards;
    rewards.push(this.state.rewardFields);
    this.setState({
      rewards,
      rewardFields: {
        ...this.state.rewardFields,
        donationAmt:{
          ...this.state.rewardFields.donationAmt,
          value: ""
        },
        rewardType:{
          ...this.state.rewardFields.rewardType,
          value: ""
        },
        reward:{
          ...this.state.rewardFields.reward,
          value: ""
        }
      }
    });

  };

  createCampaignSuccess = () => {

    if(this.state.fields.types.value === "Reward based"){
      this.nextStep();
    }else{
      const { step } = this.state;
      this.setState({ step: step + 2 });
    }

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
    const { utils, categories, orgTypes, createdCampaign } = this.props;
    
    var { step, rewards } = this.state;

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
    const validate2 = validate.bind(this, this, form2);
    const validate3 = validate.bind(this, this, form3);
step = 5;
    switch (step) {
      case 1:
        return (
          <CreateCampaignForm1
            nextStep={this.nextStep}
            _handleChange={this._handleChange}
            editCampaign={this.editCampaign}
            isEdit={this.isEdit}
            form={this.state}
            validate={validate1}
            onBlur={this.onBlur}
            categoriesItem={categoriesItem}
          />
        );
      case 2:
        return (
          <CreateCampaignForm2
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            editCampaign={this.editCampaign}
            isEdit={this.isEdit}
            _handleChange={this._handleChange}
            campaignRequest={campaignRequest}
            triggerCampaignAction={this.triggerCampaignAction}
            createCampaignSuccess={this.createCampaignSuccess}
            utils={utils}
            form={this.state}
            validate={validate2}
            onBlur={this.onBlur}
            typeItem={orgTypesItem}
          />
        );
      case 3:
        return (
          <RewardForm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            _handleChange={this._handleChange}
            onBlur={this.onBlur}
            rewards={rewards}
            //typeItem={typeItem}
            triggerSaveRewardAction={this.triggerSaveRewardAction}
            saveRewardSuccess={this.saveRewardSuccess}
            utils={utils}
            form={this.state}
            validate={validate3}
            campaignRequest={campaignRequest}
            isEdit={this.isEdit}
            editCampaign={this.editCampaign}
          />
        );
      case 4:
        return (
          <CampaignFeatureImage
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            _handleChange={this._handleChange}
            imageVal={this.state.image}
            isEdit={this.isEdit}
            formError={this.state.formError}
            campaignRequest={campaignRequest}
            editImageUrl={this.editCampaign && this.editCampaign.imageUrl}
            triggerImageUpload={this.triggerImageUpload}
            utils={utils}
            setImage={this.setImage}
          />
        );
      case 5:
        return (
          <CampaignFeatureImages
            prevStep={this.prevStep}
            _handleChange={this._handleChange}
            imageVal={this.state.image}
            isEdit={this.isEdit}
            formError={this.state.formError}
            campaignRequest={campaignRequest}
            editImageUrl={this.editCampaign && this.editCampaign.imageUrl}
            triggerImageUpload={this.triggerImageUpload}
            createdCampaign={createdCampaign}
            utils={utils}
            setImage={this.setImage}
          />
        );
    }
  }
}

export default CreateCampaignForm;