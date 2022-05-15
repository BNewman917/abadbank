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
                            name: "demo",
                            email: "demo@demo.com",
                            password: "demopass",
                            balance: 0,
                        },
                        {
                            name: "admin",
                            email: "admin@admin.com",
                            password: "adminpass",
                            balance: 100000,
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
