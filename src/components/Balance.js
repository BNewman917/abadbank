import { React } from "react";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./partials/Context";
import { UseCard } from "./partials/UseCard";

export const Balance = () => {
    const context = useContext(UserContext);
    return (
        <UseCard
            header="Balance"
            body={
                <>
                    <p>Name: {context.users[0].name}</p>
                    <p>Email: {context.users[0].email}</p>
                    <p>Balance: {context.users[0].balance}</p>
                </>
            }
        />
    );
};
