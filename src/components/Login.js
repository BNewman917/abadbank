import { useState, useEffect } from "react";
import { UseCard } from "./partials/UseCard";
import { useFormik } from "formik";
import { capitalize } from "./helpers/capitalize";

export const Login = ({ context, user, setUser }) => {
    const [status, setStatus] = useState("");
    // const [disabled, setDisabled] = useContext(true);

    const validate = (values) => {
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

    let errors = {};
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            if (formik.errors.email || formik.errors.password) {
                setStatus(formik.errors);
                return false;
            } else {
                const user = getUser(values.email);
                if (user && user.password === values.password) {
                    setUser(user);
                    console.log(`user: ${user.name}`);
                    setStatus("");
                    resetForm();
                    alert("Login successful");
                } else {
                    setStatus("Incorrect password");
                    setTimeout(() => setStatus(""), 3000);
                }
            }
        },
    });

    const handleLogout = () => {
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
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
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
