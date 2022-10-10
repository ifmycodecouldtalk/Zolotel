import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:3001/api/auth/signup", {
            method: "POST",
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
              username: this.state.username,
              email: this.state.email,
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
    render(){
        return(
            <>
                <div className='signin'>
                    
                    {/* Logo */}
                    <div className='text-center'>
                    <Link to="/home"><img src='/electronics-brand.jpg' alt='logo' className='myLogo mt-2' /></Link>
                    </div>
                    {/* Form */}
                    <br />
                    <div className='myForm w-25 p-4'>
                        <form onSubmit={this.handleSubmit}>
                            <p className='createAccount'>Create Account</p>
                        {/* Name */}
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Your Username</b></label>
                            <input  type="text" 
                                    className="form-control input-form" 
                                    id="exampleInputName" 
                                    aria-describedby="nameHelp" 
                                    placeholder="Enter your username..."
                                    onChange={(e) => this.setState({username: (e.target.value)})}
                            />
                            <small id="nameHelp" className="form-text text-muted">Choose any unique username.</small>
                        </div>
                        <br />
                        {/* Email */}
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1"><b>Email Address</b></label>
                            <input  type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter email" 
                                    onChange={(e) => this.setState({email: (e.target.value)})}
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
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
                        {/* Re-type Password */}
                        {/* Button */}
                        <div className='text-center'>
                            <button type="submit" className="btn btn-info w-50">Continue</button>
                        </div>
                        <br />
                        {/* Privacy Notice */}
                        <p className='zolotel-privacy text-center'>By creating an account, you agree to Zolotel's <u>Conditions of Use</u> and <u>Privacy Notice</u>.</p>
                        {/* Already Have An Account? */}
                        <hr />
                        <p className='already'>Already have an account? <a href='/signin'>Sign in</a></p>
                        </form>
                    </div>
                    
                    {/* Footer */}
                    <br />
                    <hr />
                    <div className='container w-50 text-center'>
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

export default Signup;