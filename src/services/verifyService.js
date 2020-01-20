import apiClient from "../store/apiClient";

class VerifyService {
  
    uploadFeatureImage = (body, showPercentageProgress) => {
        return new Promise((resolve, reject) => {
            const config = {
                onUploadProgress: ({ loaded, total }) => {
                    showPercentageProgress((loaded * 100) / total);
                },
                body,
                method: "PUT"
            };
            apiClient(`/account/imageverification`, config)
            .then(res => {
                return resolve(res);
            })
            .catch(error => {
                reject(error.response);
            });
        });
    };
  
    uploadDocumentImage = (body, showPercentageProgress) => {
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
            apiClient(`/account/verification/file`, config)
            .then(res => {
                return resolve(res);
            })
            .catch(error => {
                reject(error.response);
            });
        });
    };
  
    verifySignup = (body) => {
        return new Promise((resolve, reject) => {
            const config = {
                body,
                method: "PUT"
            };
            apiClient(`/account/verification`, config)
            .then(res => {
                return resolve(res);
            })
            .catch(error => {
                reject(error.response);
            });
        });
    };

}

const instance = new VerifyService();

export default instance;
