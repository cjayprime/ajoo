import React, { Component } from "react";
import Provider from "react-redux/es/components/Provider";
import { PersistGate } from "redux-persist/lib/integration/react";

import store, { persistor } from "./store";
import Routes from "./Routes";

import { SnackbarProvider } from 'notistack';
const notistackRef = React.createRef();
const onClickDismiss = key => () => { 
    notistackRef.current.closeSnackbar(key);
}

class App extends Component{
  render() {
    return (
        <Provider store={store}>
          {/*<PersistGate loading={<>Loading Persist Store</>} persistor={persistor}>*/}
            <SnackbarProvider 
              ref={notistackRef}
              action={(key) => (
                <div style={{cursor: "pointer"}} onClick={onClickDismiss(key)}>
                  X
                </div>
              )}
            >
              <Routes />
            </SnackbarProvider>
          {/*</PersistGate>*/}
        </Provider>
    );
  }
}

export default App;
