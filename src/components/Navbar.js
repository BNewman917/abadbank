import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "../styles/navbar.css";

export const NavBar = () => {
    return (
        <nav
            className="navbar navbar-expand-md navbar-light"
            style={{ backgroundColor: "#cae9ed" }}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Bad Bank
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#/createAccount"
                            >
                                Create Account
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/login">
                                Log In
                            </a>
                        </li>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/deposit">
                                Deposit
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/withdraw">
                                Withdraw
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/balance">
                                Balance
                            </NavDropdown.Item>
                        </NavDropdown>
                        <li className="nav-item">
                            <a className="nav-link" href="#/allData">
                                All Data
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
