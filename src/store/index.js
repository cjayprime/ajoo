import * as reduxModule from "redux";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import createReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

/*const persistConfig = {
	key: "root",
	storage,
  whitelist: ["auth", "misc", "campaigns", "confirm", "setting", "verify", "select"/*, "utils"/],
  stateReconciler: autoMergeLevel2
};*/
// This was removed cause anytime a request fires it saves a copy of some of its data (specifically
// `store.auth.requestStatus`) and I was unable to remove it (maybe with whitelist?) it from the `auth`
// store (I have no idea why the simple whitelist of `auth` didn't just work)
//
// Store should only ever hold the values needed at the time, imagine I was to naviagte to all sections
// of the site, using persist would slow me down as it would save and store all the data loaded for 
// previous parts, wwhich are indeed no longer needed and without MEMOIZATION benefits, causing memory bloats and leaks.
//
// To reimplement it go to  line 59 and 62 and uncomment the persitor store creation and module export respectively
// then `src/App.js` file and uncomment the `Persitor` component
//const reducers = persistReducer(persistConfig, createReducer());
const reducers = createReducer();

export const store = createStore(reducers, enhancer);

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    
    return;
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
  return store;
};

sagaMiddleware.run(rootSaga);
//const persistor = persistStore(store);

//export { persistor };
export default store;
