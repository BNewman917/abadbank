import React from "react";
import { Card, Container } from "react-bootstrap";
import { UserContext } from "./partials/Context";
import { UseCard } from "./partials/UseCard";
import bank from "../images/bank.png";

export const Home = () => {
    return (
        <UseCard
            txtcolor="black"
            header="Bad Bank Landing Page"
            title="Welcome to the Bad Bank!"
            text="This is a simple bank application."
            body={
                <img src={bank} className="img-fluid" alt="Responsive image" />
            }
        />
    );
};
