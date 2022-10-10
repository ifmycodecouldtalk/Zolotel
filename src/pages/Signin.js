import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../services/auth.service";
import './Signin.css';

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            loading: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:3001/api/auth/signin", {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            this.setState({username: ''});
            this.setState({email: ''});
          } else {
            alert('something went wrong');
          }
        } catch (err) {
          console.log(err);
        }
    };
    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true
        });

        if (1==1) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    window.location.replace("http://localhost:3001/home");
                },
                error => {
                    const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                    alert("Incorrect credentials, try again");
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }
    render(){
        return(
            <>
                <div className='signin'>
                    {/* Logo */}
                    <div className='text-center'>
                        <Link to="/home"><img src='/electronics-brand.jpg' alt='logo' className='myLogo mt-2' /></Link>
                    </div>
                    {/* Signin Form */}
                    <br />
                    <div className='myForm w-25 p-4'>
                        <form onSubmit={this.handleLogin}>
                            <p className='signinTitle'>Sign In</p>
                            {/* username */}
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1"><b>Enter Username</b></label>
                                <input  type="text" 
                                        className="form-control input-form" 
                                        id="exampleInputName" 
                                        aria-describedby="nameHelp" 
                                        placeholder="Enter your username..."
                                        onChange={(e) => this.setState({username: (e.target.value)})}
                                />
                            </div>
                            <br />
                            {/* Password */}
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                                <input  type="password" 
                                        className="form-control" 
                                        id="exampleInputPassword1" 
                                        placeholder="Password" 
                                        onChange={(e) => this.setState({password: (e.target.value)})}
                                />
                            </div>
                            <br />
                            {/* Button */}
                            <div className='text-center'>
                                <button type="submit" className="btn btn-info w-50">Log In</button>
                            </div>
                            <br />
                            {/* Privacy Notice */}
                            <p className='zolotel-privacy text-center'>By continuing, you agree to Zolotel's <u>Conditions of Use</u> and <u>Privacy Notice</u>.</p>
                        </form>
                    </div>
                    <br />
                    {/* New to Zolotel? */}
                    <div className='newText  text-center'>
                        <h2 className='text-center myLine'><span>New to Zolotel?</span></h2><br />
                        {/* Button to signup page */}
                        <Link className="btn btn-primary me-2 mySignUpButton" to='/signup'>Sign Up</Link>
                    </div>
                    {/* Footer */}
                    <br />
                    <hr />
                    <div className='container w-50 text-center footy'>
                        <div className='row'>
                            <div className='col-3'>
                                <p>Conditions of Use</p>
                            </div>
                            <div className='col'>
                                <p>Privacy Notice</p>
                            </div>
                            <div className='col'>
                                <p>Help</p>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </>
        )
    }
}

export default Signin;