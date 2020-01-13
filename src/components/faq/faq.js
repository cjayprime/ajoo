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
      coll[i].addEventListener("click", function() {
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </p>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sapien velit, aliquet eget commodo nec, auctor a
                    sapien. Nam eu neque vulputate diam rhoncus faucibus.
                    Curabitur quis varius libero. Lorem ipsum dolor sit amet,
                  </div>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                </div>
              </div>
              {/* Rewards & Donations */}
              <div className="rewards_donation">
                <div className="faq_head">
                  Rewards & <br /> Donations
                </div>
                <div className="faq_desc">
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                </div>
              </div>
              {/* Verified Organisations */}
              <div className="verified_org">
                <div className="faq_head">
                  Verified <br /> Organisations
                </div>
                <div className="faq_desc">
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                </div>
              </div>
              {/* Beneficiaries */}
              <div className="benefit">
                <div className="faq_head">Beneficiaries</div>
                <div className="faq_desc">
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                </div>
              </div>
              {/* Donors */}
              <div className="donors">
                <div className="faq_head">Donors</div>
                <div className="faq_desc">
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </p>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sapien velit, aliquet eget commodo nec, auctor a
                    sapien. Nam eu neque vulputate diam rhoncus faucibus.
                    Curabitur quis varius libero. Lorem ipsum dolor sit amet,
                  </div>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                </div>
              </div>
              <button className="collapsible"> Rewards & Donations</button>
              <div className="content">
                <div className="faq_desc">
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>
                  <hr className="faq_hr" />
                </div>
              </div>
              <button className="collapsible">Verified Organisations</button>
              <div className="content">
                <div className="faq_desc">
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                </div>
              </div>
              <button className="collapsible">Beneficiaries</button>
              <div className="content">
                <div className="faq_desc">
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                </div>
              </div>
              <button className="collapsible">Donors</button>
              <div className="content">
                <div className="faq_desc">
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
                  <p>Lorem ipsum dolor sit amet gtdreg hutrdc jhfrs?</p>{" "}
                  <hr className="faq_hr" />
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
