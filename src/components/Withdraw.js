import { useContext, useEffect, useState } from "react";
import { UserContext } from "./partials/Context";
import { UseCard } from "./partials/UseCard";

export const Withdraw = () => {
    const context = useContext(UserContext);
    const user = context.users[0];

    const [amount, setAmount] = useState(0);
    const [disabled, setDisabled] = useState(true);
    const [balance, setBalance] = useState(user.balance);

    function validate(field) {
        if (!Number(field)) {
            alert("Input type not valid. Please enter a number");
            clearForm();
            return false;
        }
        if (Number(field) <= 0) {
            alert("Please enter a positive value");
            clearForm();
            return false;
        }
        return true;
    }

    function clearForm() {
        setAmount("");
        setDisabled(true);
    }

    function handleWithdraw() {
        if (!validate(amount, "amount")) return;

        setBalance(Number(balance) - Number(amount));
        user.balance -= Number(amount);
        alert(`Your withdrawal of $${amount.toLocaleString()} was successful`);
    }

    return (
        <UseCard
            header="Withdraw"
            body={
                <>
                    <h5>Your balance is: ${balance.toLocaleString()}</h5>
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
    );
};
