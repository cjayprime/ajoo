import React, { PureComponent } from "react";

class Organizations extends PureComponent {
  render() {
    return (
      <>
        <div id="organisations">
          <h2>Trusted by Nigeria’s biggest Non-profit Organizations</h2>
          <div id="trusted_images">
            {Array.apply(null, Array(4)).map((a, i) => (
              <div className="trusted_column" key={i}>
                <img
                  alt={`Organization ${i + 1}`}
                  src={`images/trusted_${i + 1}.svg`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="clearfix"></div>
      </>
    );
  }
}

export default Organizations;
