import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AuthService from '../services/auth.service';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          redirect: null,
          userReady: false,
          currentUser: { username: "" },
          isLoggedIn: false
        };
        this.handleLogout = this.handleLogout.bind("this");
    }
    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if(currentUser) this.setState({isLoggedIn: true});
        this.setState({ currentUser: currentUser, userReady: true });
        console.log(this.state.isLoggedIn);
    }
    handleLogout = (e) => {
        AuthService.logout();
        this.setState({isLoggedIn: false});
    }
    render() {
        const { currentUser } = this.state;
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/home'><img className='myBrand' src="/electronics-brand.jpg" alt='logo' /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact Us</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#body" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Buy
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="http://localhost:3001/home#kits">Kits</a></li>
                                        <li><a className="dropdown-item" href="http://localhost:3001/home#components">Components</a></li>
                                        <li><a className="dropdown-item" href="http://localhost:3001/home#modules">Modules</a></li>
                                        <li><a className="dropdown-item" href="http://localhost:3001/home#gadgets">Gadgets</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="http://localhost:3001/home#tools">Tools</a></li>
                                        <li><a className="dropdown-item" href="http://localhost:3001/home#tutorials">Tutorials, Instruction Manuals</a></li>
                                    </ul>
                                </li>
                            </ul>
                            {(!this.state.isLoggedIn) ?
                            <div className="d-flex">
                                <Link className="btn btn-outline-warning me-2" to='/signup'>Sign Up</Link>
                                <Link className="btn btn-warning" to='/signin'>Sign In</Link>
                            </div>:
                            <div className="d-flex">
                                <strong><h3 className='yourUserName pe-4'>Hello, <u>{currentUser.username}</u></h3></strong>
                                <Link to="/home"><button className="btn btn-danger me-2" onClick={this.handleLogout}>Logout</button></Link>
                                <Link to="/cart"><i className="bi bi-cart-fill ps-3"></i></Link>
                            </div>}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;