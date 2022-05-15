import { useContext, useEffect, useState } from "react";
import { UserContext } from "./partials/Context";
import { UseCard } from "./partials/UseCard";

export const Login = () => {
    const context = useContext(UserContext);
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [disabled, setDisabled] = useContext(true);
    const [user, setUser] = useState({});

    function handleLogin() {
        const userLogin = context.users.filter(
            (item) => item.email === email && item.password === password
        );

        if (userLogin.length === 0) {
            alert("Email or Password are incorrect.");
        }

        if (userLogin.length !== 0) {
            setShow(false);
            const itemIndex = context.users.findIndex(
                (item) => item.email === email && item.password === password
            );
            context.users.splice(itemIndex, 1);
            context.users.splice(0, 0, userLogin[0]);
            setUser(userLogin[0]);
        }
        context.log = true;
    }

    function clearForm() {
        setEmail("");
        setPassword("");
        setShow(true);
    }

    return (
        <>
            {show ? (
                <UseCard
                    bgcolor="success"
                    opacity="10"
                    header="Login"
                    status={status}
                    body={
                        <>
                            Email
                            <br />
                            <input
                                type="input"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <button
                                type="submit"
                                className="btn btn-outline-success"
                                onClick={handleLogin}
                            >
                                Log in
                            </button>
                        </>
                    }
                />
            ) : (
                <div>
                    <h3>"You have logged in"</h3>
                </div>
            )}
        </>
    );
};
