import React, { PureComponent } from "react";

import pregnant from "../../assets/images/pregnant.svg";
import Ellipse2 from "../../assets/images/Ellipse2.svg";

class AskingForFund extends PureComponent {
  render() {
    return (
      <div className="asking_for_fund_content_container">
        <div className="asking_for_fund_container">
          <div className="asking_for_fund_content">
            <p className="asking_for_fund_desc">Asking for funds is hard.</p>
            <h1>Ajoo makes it easier</h1>
            <p className="asking_for_fund_desc">
              It can be difficult asking for money from strangers. Ajoo isn’t a
              stranger, it is a community of well meaning individuals ready to
              help you when you need it. You can be a campaigner today and be a
              donor tomorrow, this is a community of people helping each other
              to solve financial problems.
            </p>
          </div>
          <div className="asking_for_fund_image1">
            {" "}
            <img
              className="asking_for_fund_image1-mob"
              src={pregnant}
              alt="pregnant woman"
              style={{ width: "300px" }}
            />
          </div>
          <div className="asking_for_fund_image2">
            <img
              className="asking_for_fund_image2-mob"
              src={Ellipse2}
              alt="doctors attending to a child"
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AskingForFund;
