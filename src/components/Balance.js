import { React } from "react";
import { UseCard } from "./partials/UseCard";
import { capitalize } from "./helpers/capitalize";

const linkStyle = {
    TextDecoration: "none",
    color: "#E69420",
};

export const Balance = ({ context, user }) => {
    return (
        <>
            {user ? (
                <UseCard
                    header="Balance"
                    body={
                        <>
                            <h4>Hello, {capitalize(user.name)}!</h4>
                            <p>
                                Your current balance is: $
                                {user.balance.toLocaleString()}
                            </p>
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
                                to see your balance.
                            </p>
                        </>
                    }
                />
            )}
        </>
    );
};
