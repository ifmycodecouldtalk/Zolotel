import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* Image Carousel */}
        <div id="carouselExampleControls" className="carousel slide myCarousel" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active text-center item-1">
                    <img src='elegoo_kit.jpg' className='elegoo-img downshift' alt='elegoo' />
                    <h1 className='elegoo-caption downshift'>We Sell Elegoo Kits for $39.99!</h1>
                </div>
                <div className="carousel-item text-center item-2">
                    <img src='gboy.jpg' className='gboy-img downshift' alt='gboy' />
                    <h1 className='elegoo-caption downshift'>We Buy Old Electronics!</h1>
                </div>
                <div className="carousel-item text-center item-3">
                    <img src='r_pi.jpg' className='r_pi-img downshift' alt='r_pi' />
                    <h1 className='elegoo-caption downshift'>Raspberry Pis For Sale!</h1>
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
                    <h3>Shop Our Newest Gadgets!</h3>
                    <img className='gallery-img' alt='gadgets' src='gadgets.png' />
                    <br />
                    <a href='#body'>Click Here to Learn More</a>
                </div>
                <div className="col gallery-square p-2 m-3 text-center">
                    <h3>Tutorials, Instructions, Manuals, and More!</h3>
                    <img className='gallery-img' alt='books' src='books.jpg' />
                    <br />
                    <a href='#body'>Click Here to Learn More</a>
                </div>
                <div className="col gallery-square p-2 m-3 text-center">
                    <h3>Popular, Bestsellers!</h3>
                    <img className='gallery-img' alt='ps5' src='ps5.jpg' />
                    <br />
                    <a href='#body'>Click Here to Learn More</a>
                </div>
            </div>
        </div>
        <br />
        <div className="container">
            <div className="row">
                <div className="col gallery-square p-2 m-3 text-center">
                    <h3>Shop Our Newest Gadgets!</h3>
                    <img className='gallery-img' alt='gadgets' src='gadgets.png' />
                    <br />
                    <a href='#body'>Click Here to Learn More</a>
                </div>
                <div className="col gallery-square p-2 m-3 text-center">
                    <h3>Tutorials, Instructions, Manuals, and More!</h3>
                    <img className='gallery-img' alt='books' src='books.jpg' />
                    <br />
                    <a href='#body'>Click Here to Learn More</a>
                </div>
                <div className="col gallery-square p-2 m-3 text-center">
                    <h3>Popular, Bestsellers!</h3>
                    <img className='gallery-img' alt='ps5' src='ps5.jpg' />
                    <br />
                    <a href='#body'>Click Here to Learn More</a>
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
                    <h2>Contact Me</h2>
                    <p>Github</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                    <p>Resume</p>
                </div>
                <div className='col'>
                    <h2>Other Projects</h2>
                    <p>Project 1</p>
                    <p>Project 2</p>
                    <p>Project 3</p>
                    <p>Project 4</p>
                </div>
                <div className='col'>
                    <h2>Helpful Links</h2>
                    <p>About</p>
                    <p>Contact Me Page</p>
                    <p>Sign In</p>
                    <p>Unsubscribe</p>
                </div>
                <div className='col'>
                    <h2>Lorem Ipsum</h2>
                    <p>English</p>
                    <p>Spanish</p>
                    <p>Italian</p>
                    <p>German</p>
                    <p>French</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;