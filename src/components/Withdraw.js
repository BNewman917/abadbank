import React from "react";
import { useContext, useEffect, useState } from "react";
import { UseCard } from "./partials/UseCard";
import { capitalize } from "./helpers/capitalize";

const linkStyle = {
    TextDecoration: "none",
    color: "green",
};

export const Withdraw = ({ context, user }) => {
    const [amount, setAmount] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [balance, setBalance] = useState(0);

    function validate(field) {
        if (!Number(field)) {
            alert("Input type not valid. Please enter a number");
            return false;
        }
        if (Number(field) > user.balance) {
            alert("Insufficient funds");
            return false;
        }
        if (Number(field) <= 0) {
            alert("Please enter a positive value");
            return false;
        }
        return true;
    }

    function handleWithdraw() {
        if (!validate(amount, "amount")) return;

        setBalance(Number(balance) - Number(amount));
        user.balance -= Number(amount);
        alert(`Your withdrawal of $${amount.toLocaleString()} was successful`);
    }

    return (
        <>
            {user ? (
                <UseCard
                    onLoad={() => setBalance(user.balance)}
                    header="Withdraw"
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
                                    id="withdraw"
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
                                    onClick={handleWithdraw}
                                >
                                    Withdraw
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
                                to make a withdrawal.
                            </p>
                        </>
                    }
                />
            )}
        </>
    );
};
