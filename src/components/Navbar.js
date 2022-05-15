import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/navbar.css";

export const NavBar = () => {
    const [title, setTitle] = useState("Home");

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <Navbar id="navbar" expand="md" style={{ backgroundColor: "#cae9ed" }}>
            <Container>
                <Navbar.Brand
                    onClick={() => {
                        setTitle("Home");
                    }}
                    href="#"
                >
                    <h2>Bad Bank</h2>
                </Navbar.Brand>
                <Navbar.Toggle
                    className="navbar-toggler fw-bolder text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                />
                <Navbar.Collapse id="basic-navbar-nav collapse navbar-collapse">
                    <Nav className="me-auto navbar-collapse justify-content-end">
                        <Nav.Link
                            onClick={() => {
                                setTitle("Create Account");
                            }}
                            href="#/createAccount"
                        >
                            Create Account
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                setTitle("Log In");
                            }}
                            href="#/login"
                        >
                            Log In
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                setTitle("Deposit");
                            }}
                            href="#/deposit"
                        >
                            Deposit
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                setTitle("Withdraw");
                            }}
                            href="#/withdraw"
                        >
                            Withdraw
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                setTitle("Balance");
                            }}
                            href="#/balance"
                        >
                            Balance
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                setTitle("All Data");
                            }}
                            href="#/allData"
                        >
                            All Data
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
