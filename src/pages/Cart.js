import React from 'react';
import AuthService from '../services/auth.service';

class Cart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            cartItems: [],
            isLoggedIn: false
        }
    }
    componentDidMount = () => {
        // get username
        const currentUser = AuthService.getCurrentUser();
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
        })
        
        // fill in the array
    }
    render(){
        return(
            <div className='cart-page'>
                <h1 className='text-center'>Cart Page</h1>
                {this.state.cartItems.map((item) => (
                    <h1>{item.name}</h1>
                ))}
            </div>
        )
    }

}
export default Cart;