import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { App } from "./components/App";
import { CurrentUser, UserContext } from "./context/Context";
import { defaultUsers } from "./components/helpers/defaultUsers";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <HashRouter>
            <UserContext.Provider
                value={
                    JSON.parse(localStorage.getItem("localUsers")) ||
                    defaultUsers
                }
            >
                <CurrentUser.Provider
                    value={JSON.parse(sessionStorage.getItem("loggedUser"))}
                >
                    <App />
                </CurrentUser.Provider>
            </UserContext.Provider>
        </HashRouter>
    </React.StrictMode>
);
