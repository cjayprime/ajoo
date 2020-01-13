import React, { Component } from "react";
import Provider from "react-redux/es/components/Provider";
//import { PersistGate } from "redux-persist/lib/integration/react";

import store/*, { persistor }*/ from "./store";
import Routes from "./Routes";

class App extends Component{

  render() {
    return (
        <Provider store={store}>
          {/*<PersistGate loading={<>Loading Persist Store</>} persistor={persistor}>*/}
            <Routes />
          {/*</PersistGate>*/}
        </Provider>
    );
  }
}

export default App;
