import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { HashRouter } from "react-router-dom";
import { UserContext } from "./components/partials/Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/dist/react-bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <HashRouter>
            <UserContext.Provider
                value={{
                    users: [
                        {
                            name: "admin",
                            email: "admin@demo.com",
                            password: "admin",
                            balance: 100000,
                        },
                        {
                            name: "demo",
                            email: "demo@demo.com",
                            password: "demo",
                            balance: 0,
                        },
                    ],
                    log: false,
                }}
            >
                <App />
            </UserContext.Provider>
        </HashRouter>
    </React.StrictMode>
);
