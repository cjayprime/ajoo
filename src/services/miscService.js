import apiClient from "../store/apiClient";

class MiscService {
	fetchState = () => {
		return new Promise((resolve, reject) => {
			apiClient("/misc/states")
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
  
	fetchLga = (stateId) => {
		return new Promise((resolve, reject) => {
			apiClient(`/misc/lga/${stateId}`)
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

	fetchCategories = () => {
		return new Promise((resolve, reject) => {
			apiClient(`/misc/categories`)
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

	fetchCampaignTypes = () => {
		return new Promise((resolve, reject) => {
			apiClient(`/misc/org_types`)
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
}

const instance = new MiscService();

export default instance;