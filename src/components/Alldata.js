import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "./partials/Context";
import { UseCard } from "./partials/UseCard";

export const AllData = () => {
    const context = useContext(UserContext);

    const UserData = () => {
        return context.users.map((user) => (
            <UseCard
                key={user.name}
                header="User Data"
                body={
                    <>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Balance: {user.balance}</p>
                    </>
                }
            />
        ));
    };

    return (
        <Container>
            <h2>All Data</h2>
            <UserData />
        </Container>
    );
};
