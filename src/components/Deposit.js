import React from "react";
import { useContext, useEffect, useState } from "react";
import { UseCard } from "./partials/UseCard";
import { capitalize } from "./helpers/capitalize";

const linkStyle = {
    TextDecoration: "none",
    color: "green",
};

export const Deposit = ({ context, user, setUser }) => {
    const [amount, setAmount] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [balance, setBalance] = useState(0);

    function validate(field) {
        if (!Number(field)) {
            alert("Input type not valid. Please enter a number");
            return false;
        }
        if (Number(field) <= 0) {
            alert("Please enter a positive value");
            return false;
        }
        return true;
    }

    function handleDeposit() {
        if (!validate(amount, "amount")) return;

        setBalance(Number(balance) + Number(amount));
        user.balance += Number(amount);
        alert(
            `Your deposit of $${amount.toLocaleString("en-US")} was successful`
        );
    }

    return (
        //============================================================
        // {user ? () : ()} take card from Balance.js if not logged in.
        <>
            {user ? (
                <UseCard
                    onLoad={() => setBalance(user.balance)}
                    header="Deposit"
                    body={
                        <>
                            <h4>Hello, {capitalize(user.name)}!</h4>
                            <h5>
                                Your balance is: $
                                {user.balance.toLocaleString()}
                            </h5>
                            <form>
                                <input
                                    style={{ marginTop: "1rem" }}
                                    type="input"
                                    className="form-control"
                                    id="deposit"
                                    placeholder="Enter amount"
                                    onChange={(e) => {
                                        setAmount(e.currentTarget.value);
                                        setDisabled(false);
                                    }}
                                />
                                <button
                                    disabled={disabled}
                                    style={{ marginTop: "1rem" }}
                                    type="submit"
                                    className="btn btn-outline-success"
                                    onClick={handleDeposit}
                                >
                                    Deposit
                                </button>
                            </form>
                        </>
                    }
                />
            ) : (
                <UseCard
                    header="Error"
                    body={
                        <>
                            <h4>You are not logged in!</h4>
                            <p>
                                Please{" "}
                                <a style={linkStyle} href="#/login">
                                    log in
                                </a>{" "}
                                to make a deposit.
                            </p>
                        </>
                    }
                />
            )}
        </>
    );
};
