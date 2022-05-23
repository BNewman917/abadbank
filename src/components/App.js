import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { NavBar } from "./Navbar";
import { Home } from "./Home";
import { CreateAccount } from "./CreateAccount";
import { Deposit } from "./Deposit";
import { Withdraw } from "./Withdraw";
import { AllData } from "./Alldata";
import { Login } from "./Login";
import { Balance } from "./Balance";

import { UserContext, CurrentUser } from "../context/Context";

export const App = () => {
    const context = useContext(UserContext);
    const currentUser = useContext(CurrentUser);
    const [user, setUser] = useState(currentUser);

    useEffect(() => {
        sessionStorage.setItem("loggedUser", JSON.stringify(user));
    }, [user]);

    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route
                    path="/CreateAccount"
                    element={
                        <CreateAccount
                            context={context}
                            user={user}
                            setUser={setUser}
                        />
                    }
                />
                <Route
                    path="/Login"
                    element={
                        <Login
                            context={context}
                            user={user}
                            setUser={setUser}
                        />
                    }
                />
                <Route
                    path="/Deposit"
                    element={<Deposit context={context} user={user} />}
                />
                <Route
                    path="/Withdraw"
                    element={<Withdraw context={context} user={user} />}
                />
                <Route
                    path="/Balance"
                    element={<Balance context={context} user={user} />}
                />
                <Route
                    path="/AllData"
                    element={<AllData context={context} user={user} />}
                />
            </Routes>
        </div>
    );
};
