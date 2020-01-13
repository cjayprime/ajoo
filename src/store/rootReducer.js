import { combineReducers } from "redux";

import auth from "./authModules/reducer";
import campaigns from "./campaignModules/reducer";
import confirm from "./confirmModules/reducer";
import setting from "./profilesettingsModules/reducer";
import verify from "./verifyModules/reducer";
import utils from "./utilsModule/reducer";
import select from "./selectModules/reducer";
import misc from "./miscModules/reducer";

const createReducer = asyncReducers =>
  combineReducers({
    auth,
    misc,
    campaigns,
    confirm,
    setting,
    verify,
    select,
    utils,
    ...asyncReducers
  });

export default createReducer;
