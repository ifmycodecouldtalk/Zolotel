import React from 'react';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#body"><img src="/electronics-brand.jpg" alt='logo' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#body">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#body">Contact Us</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#body" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Buy
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#body">Kits</a></li>
                                        <li><a className="dropdown-item" href="#body">Components</a></li>
                                        <li><a className="dropdown-item" href="#body">Modules</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#body">Gadgets</a></li>
                                        <li><a className="dropdown-item" href="#body">Tools</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#body" tabindex="-1" aria-disabled="true">Sell</a>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button className="btn btn-outline-primary me-2" type="submit">Sign Up</button>
                                <button className="btn btn-primary" type="submit">Sign In</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;