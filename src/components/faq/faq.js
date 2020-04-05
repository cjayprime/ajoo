import React, { PureComponent } from "react";

import { Link } from "react-router-dom";

class PrivacyPolicy extends PureComponent {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {};
  }

  componentDidMount() {
    this._isMounted = true;

    const coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        // this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }

  _safelySetState = (newState, prevState = null) => {
    if (this._isMounted)
      return this.setState(state => ({
        [prevState]: !state[prevState],
        ...newState
      }));
  };

  render() {
    return (
      <>
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq_card">
            <div className="faq_card-body-desk">
              {/* about ajoo */}
              <div className="ajoo_about">
                <div className="faq_head">About Ajoo</div>
                <div className="faq_desc">
                  <p>
                    When does Ajoo.ng refund policy work?
                  </p>
                  <div>
                    Ajoo.ng refunds back to donors when the
                     purpose of a campaign cannot be met again
                     or it has already been met prior to the donation.
                      We ensure our donors are in safe hands.
                  </div>
                  {/* <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p> */}
                </div>
              </div>
              {/* Rewards & Donations */}
              <div className="rewards_donation">
                <div className="faq_head">
                  Rewards & <br /> Donations
                </div>
                <div className="faq_desc">
                  <hr className="faq_hr" />
                  <p>What is a reward campaign?</p>
                  <hr className="faq_hr" />
                  <div>A reward campaign is a campaign
                    that has a non-financial benefit attached
                     at the end of the campaign with examples
                      such as social media shout out, appreciation
                       t-shirts and caps. There will be NO financial reward.
                        </div>
                  {/* <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" /> */}
                </div>
              </div>
              {/* Verified Organisations */}
              <div className="verified_org">
                <div className="faq_head">
                  Verified <br /> Organisations
                </div>
                <div className="faq_desc">
                  <p>How does the vetting work?</p>
                  <hr className="faq_hr" />
                  <div>We vet campaigners using National ID cards, student
                     ID cards, international passports, etc and we vet
                     campaigns physically especially medical campaigns.
                     </div>
                  <hr className="faq_hr" />
                </div>
              </div>
              {/* Beneficiaries */}
              {/* <div className="benefit">
                <div className="faq_head">Beneficiaries</div>
                <div className="faq_desc">
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                </div>
              </div> */}
              {/* Donors */}
              <div className="donors">
                <div className="faq_head">Donors</div>
                <div className="faq_desc">
                  <p>Can normal individuals become volunteers?</p>
                  <hr className="faq_hr" />
                  <div>
                    Yes. Normal individuals can become volunteers
                    after they have registered on the platform by filing
                    the form on the volunteer tab, submit a valid identity
                     card and is interviewed via physical meeting, skype
                      video, whatsapp video messenger and other video messaging platforms.
                  </div>
                  <hr className="faq_hr" />
                  <p>
                    Will volunteers have to create a separate
                    profile with a different email address, phone number, etc?
                  </p>
                  <hr className="faq_hr" />
                  <div>
                    No. A previously registered user who has once created
                     a campaign can use the profile to become a volunteer.
                      Questions excluded during the creation of campaign
                       however will be asked to complete the registration as a volunteer
                  </div>
                  <hr className="faq_hr" />
                  <p>Are volunteers restricted from starting their own campaigns if they want to?</p>
                  <hr className="faq_hr" />
                  <div>
                    No. Similar to a campaigner becoming a volunteer,
                     the volunteer will have to answer questions not
                      on the sign-up page for volunteers and necessary
                       for creating a campaign.
                  </div>
                  <hr className="faq_hr" />
                  <p>
                    What prevents volunteers from joining or creating falsified campaigns to cheat
                     the system if they are meant to be trusted members of the public?
                  </p>
                  <hr className="faq_hr" />
                  <div>
                    Volunteers will be randomly selected from a pool of volunteers.
                     Volunteers grading system and profile are made public as well.
                  </div>
                  <hr className="faq_hr" />
                  <p>If the volunteers are to be verified and trusted members of
                    the public, what will the platform require from them to
                    prove their authenticity?
                  </p>
                  <hr className="faq_hr" />
                  <div>
                    A valid identity card e.g National ID card, Nigerian International Passport,
                     Student Identity Card, etc.
                  </div>
                  <hr className="faq_hr" />
                  <p>What documents, and/or information is required for
                    volunteers to sign up in the first place?</p>
                  <hr className="faq_hr" />
                  <div>
                    Check the Sign Up Info and document is same as question 7.
                    </div>
                </div>
              </div>
              <div className="faq_help">
                <p>
                  Didn’t find your answer?{" "}
                  <Link to="to">
                    <label>Contact Us</label>
                  </Link>{" "}
                  for further enquiries.
                </p>
              </div>
            </div>
            {/* faq mobile */}
            <div className="faq_card-body-mobile">
              <button className="collapsible">About Ajoo</button>
              <div className="content">
                <div className="faq_desc">
                  <p>
                    When does Ajoo.ng refund policy work?
                  </p>
                  <div>
                    Ajoo.ng refunds back to donors when the
                     purpose of a campaign cannot be met again
                     or it has already been met prior to the donation.
                      We ensure our donors are in safe hands.
                  </div>
                  {/* <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p> */}
                </div>
              </div>
              <button className="collapsible"> Rewards & Donations</button>
              <div className="content">
                <div className="faq_desc">
                  <hr className="faq_hr" />
                  <p>What is a reward campaign?</p>
                  <hr className="faq_hr" />
                  <div>A reward campaign is a campaign
                    that has a non-financial benefit attached
                     at the end of the campaign with examples
                      such as social media shout out, appreciation
                       t-shirts and caps. There will be NO financial reward.
                        </div>
                  {/* <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" /> */}
                </div>
              </div>
              <button className="collapsible">Verified Organisations</button>
              <div className="content">
                <div className="faq_desc">
                  <p>How does the vetting work?</p>
                  <hr className="faq_hr" />
                  <div>We vet campaigners using National ID cards, student
                     ID cards, international passports, etc and we vet
                     campaigns physically especially medical campaigns.
                     </div>
                  <hr className="faq_hr" />
                </div>
              </div>
              {/* <button className="collapsible">Beneficiaries</button>
              <div className="content">
                <div className="faq_desc">
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                </div>
              </div> */}
              <button className="collapsible">Donors</button>
              <div className="content">
                <div className="faq_desc">
                  <p>Can normal individuals become volunteers?</p>
                  <hr className="faq_hr" />
                  <div>
                    Yes. Normal individuals can become volunteers
                    after they have registered on the platform by filing
                    the form on the volunteer tab, submit a valid identity
                     card and is interviewed via physical meeting, skype
                      video, whatsapp video messenger and other video messaging platforms.
                  </div>
                  <hr className="faq_hr" />
                  <p>
                    Will volunteers have to create a separate
                    profile with a different email address, phone number, etc?
                  </p>
                  <hr className="faq_hr" />
                  <div>
                    No. A previously registered user who has once created
                     a campaign can use the profile to become a volunteer.
                      Questions excluded during the creation of campaign
                       however will be asked to complete the registration as a volunteer
                  </div>
                  <hr className="faq_hr" />
                  <p>Are volunteers restricted from starting their own campaigns if they want to?</p>
                  <hr className="faq_hr" />
                  <div>
                    No. Similar to a campaigner becoming a volunteer,
                     the volunteer will have to answer questions not
                      on the sign-up page for volunteers and necessary
                       for creating a campaign.
                  </div>
                  <hr className="faq_hr" />
                  <p>
                    What prevents volunteers from joining or creating falsified campaigns to cheat
                     the system if they are meant to be trusted members of the public?
                  </p>
                  <hr className="faq_hr" />
                  <div>
                    Volunteers will be randomly selected from a pool of volunteers.
                     Volunteers grading system and profile are made public as well.
                  </div>
                  <hr className="faq_hr" />
                  <p>If the volunteers are to be verified and trusted members of
                    the public, what will the platform require from them to
                    prove their authenticity?
                  </p>
                  <hr className="faq_hr" />
                  <div>
                    A valid identity card e.g National ID card, Nigerian International Passport,
                     Student Identity Card, etc.
                  </div>
                  <hr className="faq_hr" />
                  <p>What documents, and/or information is required for
                    volunteers to sign up in the first place?</p>
                  <hr className="faq_hr" />
                  <div>
                    Check the Sign Up Info and document is same as question 7.
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr id="footer_hr" />
      </>
    );
  }
}

export default PrivacyPolicy;
