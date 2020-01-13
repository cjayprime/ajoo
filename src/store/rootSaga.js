import { all } from "redux-saga/effects";
import authsSaga from "./authModules/saga";
import miscSaga from "./miscModules/saga";
import settingsSaga from "./profilesettingsModules/saga";
import campaignSaga from "./campaignModules/saga";

export default function* rootSaga() {
	yield all([
        authsSaga(),
        miscSaga(),
        settingsSaga(),
        campaignSaga()
    ]);
}
