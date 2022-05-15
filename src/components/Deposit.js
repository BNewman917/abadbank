import { useContext, useEffect, useState } from "react";
import { UserContext } from "./partials/Context";
import { UseCard } from "./partials/UseCard";

export const Deposit = () => {
    const context = useContext(UserContext);
    const balance = context.users[0].balance.toLocaleString("en-US");

    function handleDeposit() {
        console.log(balance);
    }

    return (
        <UseCard
            header="Deposit"
            body={
                <>
                    <h5>Your balance is: ${balance}</h5>
                    <form>
                        <input
                            style={{ marginTop: "1rem" }}
                            type="number"
                            min="0"
                            className="form-control"
                            id="deposit"
                            placeholder="Enter amount"
                        />
                        <button
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
    );
};
