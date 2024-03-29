import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

import App from "./containers/App";
import store from "./store";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
