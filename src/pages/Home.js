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
        <div id="carouselExampleControls" class="carousel slide myCarousel" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active text-center item-1">
                    <img src='elegoo_kit.jpg' className='elegoo-img downshift' alt='elegoo' />
                    <h1 className='elegoo-caption downshift'>We Sell Elegoo Kits for $39.99!</h1>
                </div>
                <div class="carousel-item text-center item-2">
                    <img src='gboy.jpg' className='gboy-img downshift' alt='gboy' />
                    <h1 className='elegoo-caption downshift'>We Buy Old Electronics!</h1>
                </div>
                <div class="carousel-item text-center item-3">
                    <img src='r_pi.jpg' className='r_pi-img downshift' alt='r_pi' />
                    <h1 className='elegoo-caption downshift'>Raspberry Pis For Sale!</h1>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        {/* Transition to Gallery with Gradient */}
        <div className='gradient-div'></div>
        {/* Gallery */}
        <div class="container">
            <div class="row">
                <div class="col gallery-square p-2 m-3 text-center">
                    <h3>Shop Our Newest Gadgets!</h3>
                    <img className='gadgets-img' alt='gadgets' src='gadgets.png' />
                    <br />
                    <a href='#'>Click Here to Learn More</a>
                </div>
                <div class="col gallery-square p-2 m-3 text-center">
                    <h3>Tutorials, Instructions, Manuals, and More!</h3>
                    <img className='books-img' alt='books' src='books.jpg' />
                    <br />
                    <a href='#'>Click Here to Learn More</a>
                </div>
                <div class="col gallery-square p-2 m-3 text-center">
                    <h3>Popular, Bestsellers!</h3>
                    <img className='ps5-img' alt='ps5' src='ps5.jpg' />
                    <br />
                    <a href='#'>Click Here to Learn More</a>
                </div>
            </div>
        </div>
        {/* Footer */}
      </div>
    )
  }
}

export default Home;