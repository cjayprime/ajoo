import React, { Component } from "react";

import CreateCampaignForm1 from "./createCampaignForm1";
import CreateCampaignForm2 from "./createCampaignForm2";
import { campaignRequest } from "../../store/campaignModules/saga";
import { validateInput, IMAGE_URL, validate } from "../../utils/misc";
import CampaignFeatureImage from "./UploadCampaignImage";

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

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
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

  triggerImageUpload = () => {
    const { image } = this.state;
    const { createdCampaign, showPercentageProgress, history } = this.props;

    if (
      this.isEdit &&
      this.editCampaign.imageUrl &&
      image === `${preImage}${this.editCampaign.imageUrl}`
    ) {
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
    const { image, step, rewardFields } = this.state;
    const { utils, categories, orgTypes } = this.props;

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
    
    for(var key in this.state.fields){

      if(key === "goal" || key === "title" || key === "category" || key === "affiliatedOrganization"){
        
        form1[key] = this.state.fields[key];
        
      }else if(key === "summary" || key === "campaign_details" || key === "types"){
        
        form2[key] = this.state.fields[key];
        
      }

    }
    
    const validate1 = validate.bind(this, this, form1);
    const validate2 = validate.bind(this, this, form2);

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
            utils={utils}
            form={this.state}
            validate={validate2}
            onBlur={this.onBlur}
            typeItem={orgTypesItem}
          />
        );
      case 3:
        return (
          <CampaignFeatureImage
            prevStep={this.prevStep}
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
    }
  }
}

export default CreateCampaignForm;
