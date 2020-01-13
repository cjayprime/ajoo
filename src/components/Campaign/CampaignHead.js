import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-responsive-modal";
import PaystackButton from "react-paystack";

import { IMAGE_URL, validate, moneyFormat, isRequestActive } from "../../utils/misc";
import { campaignRequest } from "../../store/campaignModules/saga";
import FormInputField from "../../sharedComponent/form";
import LoadableButton from "../../sharedComponent/LoadableButton";
import { modalOptions } from "../../store/utilsModule/actions";
import authServices from '../../services/authServices';

const bg = {
  overlay: {
    background: "rgba(17, 12, 12, 0.932)"
  },
  modal: {
    width: "415px",//292
    height: "auto",
    minHeight: "250px",
    display: "flex",
    justifyContent: "center",
    //alignItems: "center",
    background: "#FFFFFF",
    borderRadius: "10px",

    overflow: "auto",
    padding: 5,
    paddingTop: 30,
    paddingRight: 0
  }
};

class CampaignHead extends Component {
  state = {
    loading: false,
    paymentVerificationAttempt: false,
    fields: {
      firstname: {
        value: "",
        error: null,
        errorMessage: "",
        name: "First name",
        rules: {
          required: true
        }
      },
      lastname: {
        value: "",
        error: null,
        errorMessage: "",
        name: "Last name",
        rules: {
          required: true
        }
      },
      email: {
        value: "",
        error: null,
        errorMessage: "",
        name: "Email",
        rules: {
          required: true
        }
      },
      anonymous: {
        value: "",
        error: null,
        errorMessage: "",
        name: "Donate anonymously?",
        rules: {
          required: false,
        }
      },
      amount: {
        value: "",
        error: null,
        errorMessage: "",
        name: "Amount",
        rules: {
          required: true,
          minLength: 3
        }
      },
      comment: {
        value: "",
        error: null,
        errorMessage: "",
        name: "Comment",
        rules: {
          required: true,
          maxLength: 240
        }
      }
    }
  };

  componentDidMount(){

    this.props.openModalAction("");

  }

  verifyPayment = response => {

    this.setState({loading: false, paymentVerificationAttempt: true});
    this.props.verifyPaymentAction({ ref: response.reference, match: this.props.match });

  };

  openInitiatePayment = () => {
    this.props.openModalAction(modalOptions.initiatePaymentModal);
  };

  _handleChange = e => {
    const { name, value } = e.target;

    let newState = { ...this.state };
    newState.formError = false;
    newState.fields[name].error = false;
    newState.fields[name].value = value;
    this.setState(newState);

    validate(this, this.state.fields, e);
  };

  onBlur = (res, name) => {
    const { error, errorMessage } = res;
    let newForm = { ...this.state };
    newForm.fields[name] = {
      ...newForm.fields[name],
      error,
      errorMessage
    };

    this.setState(newForm);
  };

  iniateDonation = () => {

    var fields = this.state.fields;
    var firstname, lastname, email, anonymous, amount, comment;
    var compulsoryFields = {};
    if(authServices.isAuthenticated()){
      var data = this.props.auth.data;
      firstname = data.firstname;
      lastname = data.lastname;
      email = data.email;
      anonymous = this.state.fields.anonymous.value;
      amount = this.state.fields.amount.value;
      comment = this.state.fields.comment.value;
      for (var key in fields)
        if(key === 'amount' || key === 'comment')
          compulsoryFields[key] = fields[key];
    }else{
      firstname = fields.firstname.value;
      lastname = fields.lastname.value;
      email = fields.email.value;
      anonymous = fields.anonymous.value;
      amount = fields.amount.value;
      comment = fields.comment.value;
      for (var key in fields)
        if(!anonymous || (anonymous && key !== "firstname" && key !== "lastname"))
          compulsoryFields[key] = fields[key];
    }

    if(validate(this, compulsoryFields)){
      this.setState({loading: true, paymentVerificationAttempt: false});

      this.props.iniateDonationAction({
        firstname,
        lastname,
        email,
        known: anonymous ? 1 : 0,
        amount,
        comment,
        campaign: this.props.campaign._id
      });
    }

  };

  render() {
    const { campaign, openModalAction, utils, initDonation, requestStatus } = this.props;
    const {
      fields: {firstname, lastname, email, anonymous, amount, comment}
    } = this.state;
    const sharelink = `${window.location.href}`;

    var src = campaign.imageUrl;
    var title = campaign.title;
    src = src ? IMAGE_URL + '363_232_' + src : 'images/image-404.jpg';
    var alt = src ? title : 'Image not found';

    var now = (new Date()).getTime() / 1000;
    var time = (new Date(campaign.created.replace(" ", "T"))).getTime() / 1000;
    var timePassed = Math.ceil((now - time) / (24 * 3600));
    var created = timePassed <= 1 ? "created today" : "created " + timePassed + " days ago";

    return (
      <>
        <div className="campaign_row">
          <div
            className="campaign_column_parent"
            style={{
              display: "flex",
              paddingBottom: 10,
              width: "100%",
            }}
          >
            <div className="campaign_column1">
              <img
                /*sizes="(min-width: 1200px) 730w,
                        (max-width: 1199px) 610w,
                        (max-width: 380px) 350w"
                srcSet={`${src} 730w,
                        ${src} 610w,
                        ${src} 350w`}*/
                src={src}
                alt={alt}
              />
              <div>
                {
                  campaign.user.is_organization === 1
                  ?
                  <b>{campaign.user.organization_name}</b>
                  :
                  <><b>{campaign.user.first_name}</b> <b>{campaign.user.last_name}</b></>
                }
                {" "}is organizing this campaign to raise &#8358;
                {moneyFormat(campaign.amount)}
                <br/>
                <i style={{fontSize: 13}}>
                  {created}
                </i>
              </div>
            </div>
            <div className="campaign_column2">
              <div className="facebook_twitter_button">
                <button className="facebook_button">
                  <img alt="facebook logo" src="images/facebook.svg" />
                  <a
                    style={{ color: "inherit" }}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${sharelink}&quote=${campaign.title}`}
                    target="_blank"
                  >
                    Share on Facebook
                  </a>
                </button>
                <button className="twitter_button">
                  <img alt="twitter logo" src="images/twitter.svg" />
                  <a
                    style={{ color: "inherit" }}
                    href={`https://twitter.com/share?url=${sharelink}&text=${campaign.title}`}
                    target="_blank"
                  >
                    Share on Twitter
                  </a>
                </button>
              </div>
              <h2>{campaign.title}</h2>
              <div className="campaign_summary">
                <h4>{campaign.summary}</h4>
              </div>
              <div className="campaignRow_h6">
                <h6>{campaign.percent > 100 ? 100 : campaign.percent}% Complete</h6>
                <h6>&#8358;{moneyFormat(campaign.pledged || "0")} Funded</h6>
              </div>
              <div className="myProgress">
                <div className="myBar"
                  style={{
                    width: (campaign.percent > 100 ? 100 : campaign.percent) + '%'
                  }}
                ></div>
              </div>
              <div className="button_home">
                <button
                  onClick={this.openInitiatePayment}
                  className="donateButton"
                >
                  Donate to Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        {utils.openModal === modalOptions.paystackPaymentModal &&
          this.state.paymentVerificationAttempt === false &&
          Object.keys(initDonation).length > 0 &&
          (
            <Modal open={true} onClose={(e) => {

              this.setState({loading: false});
              openModalAction();

            }} styles={bg} center class="trie" className="yui">
              <PaystackButton
                text="Make Payment"
                className="payButton"
                callback={this.verifyPayment}
                close={(e) => {

                  this.setState({loading: false});
                  openModalAction();

                }}
                disabled={true}
                embed={true}
                reference={initDonation.ref}
                email={initDonation.email}
                amount={parseFloat(initDonation.amount)}
                paystackkey={initDonation.p_key}
                tag="button"
              />
            </Modal>
          )}
        <Modal
          open={utils.openModal === modalOptions.initiatePaymentModal}
          onClose={(e) => {

            this.setState({loading: false});
            openModalAction();

          }}
          styles={bg}
          center
        >
          <div className="donate_modal-body" style={{/*width: parseFloat(bg.modal.width) - 50, height: bg.modal.height*/}}>
            <h1 className="donate_modal-head">Make your Donation</h1>
            <hr />
            <div>
              {requestStatus && requestStatus.code !== 100 ? <p style={{color: "red"}}>{requestStatus.desc}</p> : <p></p>}
              <div className="donate_div">
                {! authServices.isAuthenticated() && ! anonymous.value
                  ?
                  <>
                    <FormInputField
                      placeholder="e.g Karibo"
                      type="text"
                      name="firstname"
                      value={firstname.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      onChange={this._handleChange}
                      labelTitle="First name"
                    />
                    <FormInputField
                      placeholder="e.g Benjamin"
                      type="text"
                      name="lastname"
                      value={lastname.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      onChange={this._handleChange}
                      labelTitle="Last name"
                    />
                    <FormInputField
                      placeholder="e.g karibobenjamin@gmail.com"
                      type="email"
                      name="email"
                      value={email.value}
                      onBlur={this.onBlur}
                      form={this.state.fields}
                      onChange={this._handleChange}
                      labelTitle="Email"
                    />
                  </>
                  :
                  ! authServices.isAuthenticated() && anonymous.value
                  ?
                  <FormInputField
                    placeholder="e.g karibobenjamin@gmail.com"
                    type="email"
                    name="email"
                    value={email.value}
                    onBlur={this.onBlur}
                    form={this.state.fields}
                    onChange={this._handleChange}
                    labelTitle="Email"
                  />
                  :
                  null
                }
                <FormInputField
                  placeholder="e.g 100000"
                  name="amount"
                  value={amount.value}
                  onBlur={this.onBlur}
                  form={this.state.fields}
                  onChange={this._handleChange}
                  labelTitle="Amount"
                />
                <FormInputField
                  placeholder=""
                  name="comment"
                  type="textarea"
                  value={comment.value}
                  onBlur={this.onBlur}
                  form={this.state.fields}
                  onChange={this._handleChange}
                  labelTitle="Comment"
                  className="donate_comment"
                  labelRight={"(" + comment.value.length + "/" + comment.rules.maxLength + ")"}
                />
                <FormInputField
                  placeholder=""
                  name="anonymous"
                  type="checkbox"
                  value={anonymous.value}
                  onBlur={this.onBlur}
                  form={this.state.fields}
                  onChange={() => {
                    this.setState({
                      fields: {
                        ...this.state.fields,
                        anonymous: {
                          ...this.state.fields.anonymous,
                          value: !this.state.fields.anonymous.value
                        }
                      }
                    })
                  }}
                  labelTitle="Donate Anonymously"
                />
              </div>
              <div className="donate_modal-btn" style={{display: "flex", justifyContent: "center"}}>
                <LoadableButton
                  onClick={this.iniateDonation}
                  className="donate_btn-submit"
                  isLoading={isRequestActive(utils.request, campaignRequest.initiateDonationRequest)}
                  className="signup_agree-btn"
                  btnTitle="Submit Donation"
                  type="submit"
                >
                </LoadableButton>
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth: auth
});

export default connect(mapStateToProps, null)(CampaignHead);
