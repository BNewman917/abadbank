import { useContext, useEffect, useState } from "react";
import { UseCard } from "./partials/UseCard";
import { UserContext } from "../context/Context";

export const CreateAccount = ({ setUser }) => {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true);
    const context = useContext(UserContext);

    function validate(field, label) {
        const nameRegex = /^[a-zA-Z\-]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!field) {
            setStatus("Error: " + label + " is required");
            setTimeout(() => setStatus(""), 3000);
            return false;
        }
        if (password.length < 8) {
            setStatus("Error: Password must be at least 8 characters");
            setTimeout(() => setStatus(""), 3000);
            return false;
        }
        if (!emailRegex.test(email)) {
            setStatus("Error: Please enter a valid email!");
            setTimeout(() => setStatus(""), 3000);
            return false;
        }
        if (!nameRegex.test(name)) {
            setStatus("Error: Please enter a valid name!");
            setTimeout(() => setStatus(""), 3000);
            return false;
        }
        for (let i = 0; i < context.users.length; i++) {
            if (context.users[i].email === email) {
                setStatus("Error: An account with that email already exists!");
                setTimeout(() => setStatus(""), 3000);
                return false;
            }
        }
        return true;
    }

    function handleCreate() {
        console.log(context);
        if (
            !validate(name, "Name") ||
            !validate(email, "Email") ||
            !validate(password, "Password")
        )
            return;

        context.users.push({
            name: name,
            email: email,
            password: password,
            balance: 0,
        });

        localStorage.setItem("localUsers", JSON.stringify(context));
        setShow(false);
    }

    function clearForm() {
        setName("");
        setEmail("");
        setPassword("");
        setShow(true);
    }

    return (
        <UseCard
            bgcolor="success"
            opacity="10"
            header="Create Account"
            status={status}
            body={
                show ? (
                    <>
                        Name
                        <br />
                        <input
                            type="input"
                            className="form-control"
                            id="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={(event) => {
                                setName(event.currentTarget.value);
                                setDisabled(false);
                            }}
                        />
                        <br />
                        Email
                        <br />
                        <input
                            type="input"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.currentTarget.value);
                                setDisabled(false);
                            }}
                        />
                        <br />
                        Password
                        <br />
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(event) => {
                                setPassword(event.currentTarget.value);
                                setDisabled(false);
                            }}
                        />
                        <br />
                        <button
                            disabled={disabled}
                            type="submit"
                            className="btn btn-outline-success"
                            onClick={handleCreate}
                        >
                            Create account
                        </button>
                    </>
                ) : (
                    <>
                        <h5>Success!</h5>
                        <button
                            type="submit"
                            className="btn btn-outline-secondary"
                            onClick={clearForm}
                        >
                            Add another account
                        </button>
                    </>
                )
            }
        />
    );
};
