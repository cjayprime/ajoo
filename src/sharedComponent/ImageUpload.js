import React, { PureComponent } from "react";
// import { Tooltip } from "@material-ui/core";
import { /*Loop,*/ Edit } from "@material-ui/icons";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import uploadIcon from "../assets/images/upload_icon.png";

class ImageUpload extends PureComponent {
  selectFile = () => {
    document.getElementById("upfile").click();
  };

  handleChange = evt => {
    const _this = this;
    var reader = new FileReader();
    var file = evt.target.files[0];

    reader.onload = function(upload) {
      _this.props.setImage(upload.target.result);
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { image, fileUploadProgress, /*toolTipText,*/ isUploading } = this.props;

    return (
      <div
        id="yourBtn"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundImage: !!image
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.13)), url(${image})`
            : null,
          backgroundSize: "cover",
          backgroundRepeat: "noRepeat",
          backgroundColor: "#FCFCFC",
          textAlign: "center",
          border: "1px dashed #B9B9B9",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 5,
          cursor: "pointer",
        }}
        onClick={this.selectFile}
        onDrop={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
      >
        {!image ? (
          <div>
            <img
              src={uploadIcon}
              style={{
                height: 60,
                width: 60
              }}
              alt="upload icon"
            />
            <p
              style={{
                fontSize: 16,
                lineHeight: "20px",
                padding: 20,
                textAlign: "center",
                color: "#414141"
              }}
            >
              Click to upload an image for your profile
            </p>
          </div>
        ) : (
          <>
            {!isUploading ? (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0
                }}
              >
                <div
                  onClick={this.selectFile}
                  style={{
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "#0072a3",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px 0 0 0",
                    cursor: "pointer"
                  }}
                >
                  <p>Change image</p>
                  <Edit
                    style={{
                      fontSize: 20,
                      color: "#fff"
                    }}
                  />
                </div>
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <div
                    style={{
                      width: "30%",
                      height: "30%"
                    }}
                  >
                    <CircularProgressbarWithChildren
                      value={fileUploadProgress || 0}
                      strokeWidth={3}
                      styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: "round",
                        trailColor: "#eee",
                        textColor: "#FF8F00",
                        pathColor: "#FF7070"
                      })}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18
                          }}
                        >
                          {parseFloat(fileUploadProgress).toFixed(0)}%
                        </p>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <input
          accept="image/png, image/jpeg"
          id="upfile"
          type="file"
          onChange={this.handleChange}
          style={{ display: "none" }}
        />
      </div>
    );
  }
}

export default ImageUpload;
