import { useContext, useEffect, useState } from "react";
import { UserContext } from "./partials/Context";
import { UseCard } from "./partials/UseCard";
import { capitalize } from "../helpers/capitalize";

export const Deposit = () => {
    const context = useContext(UserContext);
    const user = context.users[0];

    const [amount, setAmount] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [balance, setBalance] = useState(user.balance);

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
        alert(`Your deposit of $${amount.toLocaleString()} was successful`);
    }

    return (
        <UseCard
            header="Deposit"
            body={
                <>
                    <h4>Hello, {capitalize(context.users[0].name)}!</h4>
                    <h5>Your balance is: ${balance.toLocaleString()}</h5>
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
    );
};
