import apiClient from "../store/apiClient";

class SettingService {
  // individual
  individualProfileSetting = body => {
    return new Promise((resolve, reject) => {
      const config = {
        body,
        method: "PUT"
      };
      apiClient("/account", config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  individualEmailSetting = body => {
    return new Promise((resolve, reject) => {
      apiClient("/account/email", { body, method: "PUT" })
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  individualPasswordSetting = body => {
    return new Promise((resolve, reject) => {
      apiClient("/account/password", { body, method: "PUT" })
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  //profile image
  // userProfileImage = (body, showPercentageProgress) => {
  //   return new Promise((resolve, reject) => {
  //     const config = {
  //       onUploadProgress: ({ loaded, total }) => {
  //         showPercentageProgress((loaded * 100) / total);
  //       },
  //       body,
  //       method: "PUT"
  //     };
  //     apiClient(`/account/image`, config)
  //       .then(res => {
  //         // if (res.data.status.code === 100) {
  //         //   this.setToken(res.data.entity.token);
  //         // }
  //         return resolve(res);
  //       })
  //       .catch(error => {
  //         reject(error.response);
  //       });
  //   });

  // organisation

  organisationProfileRequest = body => {
    return new Promise((resolve, reject) => {
      apiClient("/account", { body, method: "PUT" })
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  organisationEmailSettingRequest = body => {
    return new Promise((resolve, reject) => {
      apiClient("/account/email", { body, method: "PUT" })
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  organisationPasswordSettingRequest = body => {
    return new Promise((resolve, reject) => {
      apiClient("/account/password", { body, method: "PUT" })
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };
}

const instance = new SettingService();

export default instance;
