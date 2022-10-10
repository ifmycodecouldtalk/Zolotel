import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import AuthService from '../services/auth.service';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            username: '',
            isLoggedIn: false
        };
        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if(currentUser) {
            this.setState({isLoggedIn: true});
            this.setState({ username: currentUser.username })
        }
    }

    handleAddToCart = async(name, username, e) => {
        e.preventDefault();
        if(username === '') {
            alert("Sign in to add items to cart");
        } else {
            let confirmation = window.confirm("Add 1 " + name + " to your cart?");
            if (confirmation) {
                try {
                    let res = await fetch("http://localhost:3001/api/auth/additem", {
                        method: "POST",
                        headers: {
                            'Content-Type':'application/json',
                            'Accept':'application/json'
                        },
                        body: JSON.stringify({
                            name: [name],
                            username: this.state.username
                        }),
                    });
                    let resJson = await res.json();
                    if (res.status === 200) {
                        console.log("check");
                        alert("sent to cart!");
                    } else {
                        alert('something went wrong');
                    }
                } catch (err) {
                console.log(err);
                }
            }
        }
    }

    render() {
        return (
            <div>
                {/* Image Carousel */}
                
                <div id="carouselExampleControls" className="carousel slide myCarousel" data-bs-ride="carousel" data-bs-interval='3000'>
                    <div className="carousel-inner">
                        <div className="carousel-item active text-center item-1">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <img src='elegoo_kit.jpg' className='elegoo-img downshift carousel-img' alt='elegoo' />
                                    </div>
                                    <div className='row breaker'></div>
                                    <div className='col'>
                                        <h3 className='elegoo-caption downshift'>We Sell Elegoo Kits for $39.99!</h3>
                                        <p className='elegoo-desc'>Start your electronics hobby with Elegoo's Starter Kits, currently on sale!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item text-center item-2">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <img src='gboy.jpg' className='gboy-img downshift carousel-img' alt='gboy' />
                                    </div>
                                    <div className='row breaker'></div>
                                    <div className='col'>
                                        <h3 className='elegoo-caption downshift'>We Buy Electronics!</h3>
                                        <p className='elegoo-desc'>Have any electronics lying around? Contact us and we will buy them off you today!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item text-center item-3">
                            <div className='container'>
                                <div className='row'>
                                    <div className='col'>
                                        <h3 className='elegoo-caption downshift'>Raspberry Pis For Sale!</h3>
                                        <p className='elegoo-desc'>All Raspberry Pi models are available for your computer needs! Comes with free booklet!</p>
                                    </div>
                                    <div className='row breaker'></div>
                                    <div className='col'>
                                        <br />
                                        <img src='r_pi.jpg' className='r_pi-img downshift carousel-img' alt='r_pi' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Transition to Gallery with Gradient */}
                <div className='gradient-div'></div>
                {/* Gallery */}
                <div className="container">
                    <div className="row">
                        <div className="col gallery-square p-2 m-3 text-center">
                            <h3 id='kits'>Kits</h3>
                            <img className='gallery-img' alt='super-kit' src='super_kit.jpg' />
                            <br />
                            <button className='btn btn-warning' onClick={(e) => this.handleAddToCart('kit', this.state.username, e)}>Add To Cart</button>
                        </div>
                        <div className="col gallery-square p-2 m-3 text-center">
                            <h3 id='components'>Components</h3>
                            <br />
                            <img className='gallery-img' alt='components' src='components.jfif' />
                            <br /><br />
                            <button className='btn btn-warning' onClick={(e) => this.handleAddToCart('components', this.state.username, e)}>Add To Cart</button>
                        </div>
                        <div className="col gallery-square p-2 m-3 text-center">
                            <h3 id='modules'>Modules</h3>
                            <br />
                            <img className='gallery-img' alt='modules' src='modules.jpg' />
                            <br /><br />
                            <button className='btn btn-warning' onClick={(e) => this.handleAddToCart('modules', this.state.username, e)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col gallery-square p-2 m-3 text-center">
                            <h3 id='gadgets'>Shop Our Newest Gadgets!</h3>
                            <br />
                            <img className='gallery-img' alt='gadgets' src='gadgets.jpg' />
                            <br /><br />
                            <button className='btn btn-warning' onClick={(e) => this.handleAddToCart('gadgets', this.state.username, e)}>Add To Cart</button>
                        </div>
                        <div className="col gallery-square p-2 m-3 text-center">
                            <h3 id='tools'>Electronics Toolsets</h3>
                            <br />
                            <img className='gallery-img' alt='tools' src='tools.jpg' />
                            <br /><br />
                            <button className='btn btn-warning' onClick={(e) => this.handleAddToCart('tools', this.state.username, e)}>Add To Cart</button>
                        </div>
                        <div className="col gallery-square p-2 m-3 text-center">
                            <h3 id='tutorials'>Books, Instructionals, Tutorials</h3>
                            <br />
                            <img className='gallery-img' alt='books' src='books.jpg' />
                            <br /><br />
                            <button className='btn btn-warning' onClick={(e) => this.handleAddToCart('books', this.state.username, e)}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <br />
                <hr />
                <br />
                <div className='container-fluid myFooter'>
                    <br /><br />
                    <div className='row test-link-color'>
                        <div className='col-1'></div>
                        <div className='col'>
                            <h2 id='contact'>Contact Me</h2><br />
                            <a className='footer-link' target='_blank' href='https://github.com/ifmycodecouldtalk'>Github</a><br /><br />
                            <a className='footer-link' target='_blank' href='https://www.linkedin.com/in/chris-martinez-461b73226/'>LinkedIn</a><br /><br />
                            <a className='footer-link' target='_blank' href='https://twitter.com/mycodecantalk/'>Twitter</a><br /><br />
                            <a className='footer-link' target='_blank' href='https://cym10-portfolio.herokuapp.com/MartinezChris_Resume2.pdf/'>Resume</a><br /><br />
                        </div>
                        <div className='col'>
                            <h2>Other Projects</h2><br />
                            <a className='footer-link' target='_blank' href='https://github.com/ifmycodecouldtalk/project-victory'>Project Victory</a><br /><br />
                            <a className='footer-link' target='_blank' href='https://github.com/ifmycodecouldtalk/journal'>Journal</a><br /><br />
                            <a className='footer-link' target='_blank' href='https://github.com/ifmycodecouldtalk/Ronin-Of-The-Western-Alchemy'>Ronins of the Western Alchemy</a><br /><br />
                        </div>
                        <div className='col'>
                            <h2>Helpful Links</h2><br />
                            <a className='footer-link' target='_blank' href='https://github.com/ifmycodecouldtalk/Zolotel'>Source Code</a><br /><br />
                            <Link className='footer-link' to='/signin'>Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;