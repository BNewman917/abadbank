import { React } from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./partials/Context";
import { UseCard } from "./partials/UseCard";
import { capitalize } from "../helpers/capitalize";

export const Balance = () => {
    const context = useContext(UserContext);
    return (
        <UseCard
            header="Balance"
            body={
                <>
                    <h4>Hello, {capitalize(context.users[0].name)}!</h4>
                    <p>
                        Your current balance is: $
                        {context.users[0].balance.toLocaleString()}
                    </p>
                </>
            }
        />
    );
};
