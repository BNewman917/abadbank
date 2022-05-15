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
import { UseCard } from "./partials/Context";

export const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/CreateAccount" element={<CreateAccount />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Deposit" element={<Deposit />} />
                <Route path="/Withdraw" element={<Withdraw />} />
                <Route path="/Balance" element={<Balance />} />
                <Route path="/AllData" element={<AllData />} />
            </Routes>
        </div>
    );
};
