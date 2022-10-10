import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import './Cart.css';

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            cartItems: [],
            isLoggedIn: false
        }
        this.cap = this.cap.bind(this);
        this.handleRemoval = this.handleRemoval.bind(this);
    }
    cap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    componentDidMount = () => {
        // get username
        const currentUser = AuthService.getCurrentUser();
        if(currentUser)
        {
            fetch("http://localhost:3001/api/auth/getcart", {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify({
                    username: currentUser.username
                })
            }).then((response) => response.json()).then((data) => {
                this.setState({cartItems: data.items});
                this.setState({isLoggedIn: true});
                this.setState({username: currentUser.username});
            })
        } else {
            return <Navigate to='/home' />
        }
        
        // fill in the array
    }
    handleRemoval(e, name) {
        e.preventDefault();
        fetch("http://localhost:3001/api/auth/removecartitem", {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                name: name
            })
        }).then(window.location.reload());
    }
    render(){
        return(
            <div className='cart-page'>
                <h1 className='text-center'>Cart Page</h1>
                {!this.state.isLoggedIn ? <p>loading...</p>: 
                    this.state.cartItems.map((item) => (
                        <div className='cart-item-area'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <h1>{this.cap(item.name)}</h1>
                                        <img src={item.url} className='cart-photo' alt='cart-item' />
                                    </div>
                                    <div className='col'>
                                        <br /><br /><br /><br />
                                        <h2>In Stock: {item.quantity}</h2>
                                        <br />
                                        <h2>Price: ${item.cost}</h2>
                                        <br />
                                        <button className='btn btn-danger' onClick={(e) => this.handleRemoval(e, item.name)}>Remove From Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

}
export default Cart;