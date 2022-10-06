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
                    <img src='elegoo_kit.jpg' className='elegoo-img' alt='elegoo' />
                    <h1 className='elegoo-caption'>We Sell Elegoo Kits for $39.99!</h1>
                </div>
                <div class="carousel-item text-center item-2">
                    <img src='gboy.jpg' className='gboy-img' alt='gboy' />
                    <h1 className='elegoo-caption'>We Buy Old Electronics!</h1>
                </div>
                <div class="carousel-item text-center item-3">
                    <img src='r_pi.jpg' className='r_pi-img' alt='r_pi' />
                    <h1 className='elegoo-caption'>Raspberry Pis For Sale!</h1>
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
        {/* Gallery */}

        {/* Footer */}
      </div>
    )
  }
}

export default Home;