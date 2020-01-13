import React, { PureComponent } from "react";

class VerifiedPagesHead extends PureComponent {
  render() {
    //const { onClick } = this.props;
    return (
      <>
        <div className="verified_page_head_banner">
          <div className="verified_page_head_banner-container">
            <div className="verified_page_head_banner-heading">
              Ajoo Verified Organisations
            </div>
            <p className="verified_page_head_banner_desc">
              Ajoo takes an additional step to verify the Organisations that
              sign up on the platform and makes them stand out from others.
            </p>
            <a href="/verified_page#verified_organization">
              <button className="verified_page_head_banner_button">
                VIEW VERIFIED ORGANISATIONS
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default VerifiedPagesHead;
