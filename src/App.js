import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import "./App.css";

import history from "./history";
import Test from "./components/Test";

const AppWrapper = () => {
    return (
        <React.StrictMode>
            <Provider store={store()}>
                <BrowserRouter history={history}>
                    <Test/>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
};

export default AppWrapper;