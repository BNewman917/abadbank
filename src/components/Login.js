import { useState, useEffect } from "react";
import { UseCard } from "./partials/UseCard";
import { useFormik } from "formik";
import { capitalize } from "./helpers/capitalize";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const passWrap = {
    display: "flex",
    position: "relative",
};

const eyeStyle = {
    position: "absolute",
    right: "1rem",
    top: ".5rem",
};

export const Login = ({ context, user, setUser }) => {
    const [status, setStatus] = useState("");
    const [showPass, setShowPass] = useState(false);
    // const [disabled, setDisabled] = useContext(true);

    const togglePass = () => {
        setShowPass(showPass ? false : true);
    };

    const validate = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = "Field required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Email is invalid";
        }
        if (!values.password) errors.password = "Field required";
        return errors;
    };

    const getUser = (email) => {
        console.log("getUser");
        console.log(context);

        const user = context.users.find((user) => user.email === email);

        return user;
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            if (formik.errors.email || formik.errors.password) {
                setStatus(formik.errors.email || formik.errors.password);
                setTimeout(() => setStatus(""), 3000);
                return false;
            }
            if (user && user.password === values.password) {
                const user = getUser(values.email);
                setUser(user);
                sessionStorage.setItem("loggedUser", JSON.stringify(user));
                console.log(`user: ${user.name}`);
                setStatus("");
                resetForm();
                alert("Login successful");
            } else {
                setStatus("Incorrect password");
                setTimeout(() => setStatus(""), 3000);
            }
        },
    });

    const handleLogout = () => {
        sessionStorage.clear();
        setUser(null);
    };

    return (
        <>
            {user ? (
                <>
                    <UseCard
                        header={`Hello, ${capitalize(user.name)}!`}
                        body={
                            <>
                                <h4>You are logged in!</h4>
                                <p>
                                    Log out if you want to use a different
                                    account.
                                </p>
                                <button
                                    type="submit"
                                    id="logOutButton"
                                    className="btn btn-outline-success"
                                    onClick={handleLogout}
                                >
                                    Log Out
                                </button>
                            </>
                        }
                    />
                </>
            ) : (
                <UseCard
                    bgcolor="success"
                    opacity="10"
                    header="Log In"
                    status={status}
                    body={
                        <form onSubmit={formik.handleSubmit}>
                            Email
                            <br />
                            <input
                                type="input"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            <br />
                            Password
                            <br />
                            <div style={passWrap}>
                                <input
                                    type={showPass ? "text" : "password"}
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                                <i style={eyeStyle} onClick={togglePass}>
                                    {eye}
                                </i>
                            </div>
                            <br />
                            <button
                                type="submit"
                                id="logButton"
                                className="btn btn-outline-success"
                            >
                                Log in
                            </button>
                        </form>
                    }
                />
            )}
        </>
    );
};
