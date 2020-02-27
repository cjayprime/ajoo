import apiClient from "../store/apiClient";

class CampaignService {
  userCreateCampaign = body => {
    return new Promise((resolve, reject) => {
      apiClient("/campaigns", { body })
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  fetchAllCampaigns = ({ time, search, verify, category, page, perPage }) => {
    return new Promise((resolve, reject) => {
      apiClient(
        `/campaigns/all?${time ? `time=${time}` : ""}${
          search ? `&search=${search}` : ""}
        ${verify ? `&verify=${verify}` : ""}
        ${category ? `&category=${category}` : ""}
        ${page ? `&page=${page}` : ""}
        ${perPage ? `&per_page=${perPage}` : ""}`
      )
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  completedCampaigns = ({ page, perPage }) => {
    return new Promise((resolve, reject) => {
      apiClient(
        `/campaigns/closed?${!isNaN(page) ? `&page=${page}` : ""}${!isNaN(perPage) ? `&per_page=${perPage}` : ""}`
      )
        .then(response => {
          return resolve(response);
        })
        .catch(error => {
          reject(error.response)
        })
    })
  }

  fetchOrganizations = ({ page, perPage }) => {
    return new Promise((resolve, reject) => {
      apiClient(`/organizations?${!isNaN(page) ? `&page=${page}` : ""}${!isNaN(perPage) ? `&per_page=${perPage}` : ""}`
      )
        .then(response => {
          return resolve(response);
        })
        .catch(error => {
          reject(error.response)
        })
    })
  }

  fetchUserCampaigns = () => {
    return new Promise((resolve, reject) => {
      apiClient(`/campaigns`)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  fetchOrganizationCampaigns = ({ page, perPage, organizationId }) => {
    return new Promise((resolve, reject) => {
      apiClient(`/campaigns/organizations/${organizationId}
      ${!isNaN(page) ? `&page=${page}` : ""}
      ${!isNaN(perPage) ? `&per_page=${perPage}` : ""}`)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response)
        })
    })
  }

  uploadCampaignImage = (body, showPercentageProgress, imageNumber) => {

    return new Promise((resolve, reject) => {
      const config = {
        onUploadProgress: ({ loaded, total }) => {
          showPercentageProgress((loaded * 100) / total);
        },
        body,
        method: "PUT"
      };
      apiClient("/image/upload" + (imageNumber ? imageNumber : ""), config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  fetchCampaignById = ({ campaignId }) => {
    return new Promise((resolve, reject) => {
      apiClient(`/campaign/${campaignId}`)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  initiateDonation = body => {
    return new Promise((resolve, reject) => {
      const config = {
        body
      };
      apiClient(`/donate`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  verifyPayment = body => {
    return new Promise((resolve, reject) => {
      const config = {
        body,
        method: "PUT"
      };
      apiClient(`/payment/verify`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  userEditCampaign = (body, id) => {
    return new Promise((resolve, reject) => {
      const config = {
        body,
        method: "PUT"
      };
      apiClient(`/campaign/${id}`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  getCampaignDonation = () => {
    return new Promise((resolve, reject) => {
      apiClient(`/donations`)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  getCampaignDonationById = ({ campaignId }) => {
    return new Promise((resolve, reject) => {
      apiClient(`/donations/${campaignId}`)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  getReward = (id) => {
    return new Promise((resolve, reject) => {
      const config = {
        method: "GET"
      };
      apiClient(`/reward/${id}`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  addReward = (body) => {
    return new Promise((resolve, reject) => {
      const config = {
        body,
        method: "POST"
      };
      apiClient(`/reward`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  editReward = (body, id) => {
    return new Promise((resolve, reject) => {
      const config = {
        body,
        method: "PUT"
      };
      apiClient(`/reward/${id}`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  deleteReward = (id) => {
    return new Promise((resolve, reject) => {
      const config = {
        method: "DELETE"
      };
      apiClient(`/reward/${id}`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  closeCampaign = (message, id) => {
    return new Promise((resolve, reject) => {
      const config = {
        body: { message },
        method: "POST"
      };
      apiClient(`/campaign/closecampaign/${id}`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  closeDonation = (id) => {
    return new Promise((resolve, reject) => {
      const config = {
        method: "POST"
      };
      apiClient(`/campaign/closedonations/${id}`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  deleteCampaign = (id) => {
    return new Promise((resolve, reject) => {
      const config = {
        method: "DELETE"
      };
      apiClient(`/campaign/delete/${id}`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  uploadThankYouImage = (body, showPercentageProgress, imageNumber) => {

    return new Promise((resolve, reject) => {
      const config = {
        onUploadProgress: ({ loaded, total }) => {
          showPercentageProgress((loaded * 100) / total);
        },
        body,
        method: "PUT"
      };
      apiClient("/image/message" + (imageNumber ? imageNumber : ""), config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  uploadVolunteerBillImage = (body, showPercentageProgress) => {

    const formData = new FormData();
    formData.append('file', body.file);
    return new Promise((resolve, reject) => {
        const config = {
            onUploadProgress: ({ loaded, total }) => {
                showPercentageProgress((loaded * 100) / total);
            },
            body: formData,
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        apiClient(`/volunteer/verification/electricity`, config)
        .then(res => {
            return resolve(res);
        })
        .catch(error => {
            reject(error.response);
        });
    });
  };

  uploadVolunteerIdentificationDocument = (body, showPercentageProgress) => {

    const formData = new FormData();
    formData.append('file', body.file);
    return new Promise((resolve, reject) => {
        const config = {
            onUploadProgress: ({ loaded, total }) => {
                showPercentageProgress((loaded * 100) / total);
            },
            body: formData,
            method: "POST",
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        apiClient(`/volunteer/verification/nationalid`, config)
        .then(res => {
            return resolve(res);
        })
        .catch(error => {
            reject(error.response);
        });
    });
  };

  reportCampaign = (body) => {
    return new Promise((resolve, reject) => {
      const config = {
        body,
        method: "POST"
      };
      apiClient(`/campaign/report`, config)
        .then(res => {
          return resolve(res);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

}

const instance = new CampaignService();

export default instance;
