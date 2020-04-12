// import jwtDecode from "jwt-decode";
import axios from "axios";

import apiClient from "../store/apiClient";
// import { showPercentageProgress } from "../store/utilsModule/actions";

class AuthService {
  signinUser = body => {
    return new Promise((resolve, reject) => {
      apiClient("/account/login", { body })
        .then(res => {
          if (res.data.status.code === 100) {
            if (res.data.entity.user.verified === 0) {
              return resolve(res);
            }
            this.setToken(res.data.entity.token);
          }
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  facebookLogin = () => {
    return new Promise((resolve, reject) => {
      const config = {
        method: "GET"
      }
      apiClient(`/account/facebookloginlink`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        })
    })
  }

  facebookSignup = () => {
    return new Promise((resolve, reject) => {
      const config = {
        method: "GET"
      }
      apiClient(`/account/facebooksignuplink
      `, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        })
    })
  }

  getFacebookDetails = ({ u }) => {
    return new Promise((resolve, reject) => {
      const config = {
        method: "GET"
      }
      apiClient(`/account/user/${u}`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        })
    })
  }

  facebookOrgSignup = () => {
    return new Promise((resolve, reject) => {
      const config = {
        method: "GET"
      }
      apiClient(`/account/facebookorgsignuplink
      `, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        })
    })
  }

  signupUser = body => {
    return new Promise((resolve, reject) => {
      apiClient("/account", { body })
        .then(res => {
          // if (res.data.status.code === 100) {
          //   this.setToken(res.data.entity.token);
          // }
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  uploadProfileImage = (body, showPercentageProgress) => {
    return new Promise((resolve, reject) => {
      const config = {
        onUploadProgress: ({ loaded, total }) => {
          showPercentageProgress((loaded * 100) / total);
        },
        body,
        method: "PUT"
      };
      apiClient(`/account/image`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  signupOrg = body => {
    return new Promise((resolve, reject) => {
      apiClient("/account/organisation", { body })
        .then(res => {
          // if (res.data.status.code === 100) {
          //   this.setToken(res.data.entity.token);
          // }
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  signoutUser = () => {
    return new Promise((resolve, reject) => {
      apiClient("/account/logout")
        .then(response => {
          if (response.data.status.code === 100) {
            this.setToken();
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch(error => reject(error));
    });
  };

  fetchUser = () => {
    return new Promise((resolve, reject) => {
      apiClient("/account")
        .then(response => {
          if (response.data.status.code === 100) {
            resolve(response.data);
          } else {
            reject(response);
          }
        })
        .catch(error => reject(error));
    });
  };

  verifyEmail = token => {
    return new Promise((resolve, reject) => {
      const config = {
        body: { token },
        method: "PUT"
      };
      apiClient(`/account/verify`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  forgotPassword = email => {
    return new Promise((resolve, reject) => {
      const config = {
        body: { email },
        method: "POST"
      };
      apiClient(`/account/emailtoresetpassword`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  resetPassword = details => {
    return new Promise((resolve, reject) => {
      const config = {
        body: { ...details },
        method: "POST"
      };
      apiClient(`/account/resetpassword`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  isAuthenticated() {
    const token = localStorage.getItem("token");
    if (token) return this.isAuthTokenValid(token);
    return false;
  }

  isAuthTokenValid = access_token => {
    if (!access_token) {
      return false;
    }
    // const decoded = jwtDecode(access_token);
    // const currentTime = Date.now();
    //   if (decoded.iat < currentTime) {
    //       this.removeToken();
    //       history.push("/");
    //       return false;
    //   } else {
    this.setToken(access_token);
    return true;
    //   }
  };

  setToken = token => {
    if (token) {
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("persist:root");
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  getToken() {
    return localStorage.getItem("token");
  }

  removeToken() {
    localStorage.removeItem("token");
  }
}

const instance = new AuthService();

export default instance;
