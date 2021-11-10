import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
const Banner = () => {
    return (
        <div className="container banner">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/kmWrKtS/photo-1529929353612-a4320ffeba41.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5 className="text-color first">Cycle Shop</h5>
                    <p className="text-color">Come to but your favourite one</p>
                    <button className="banner-button bg-primary">Watch</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/qN0xb7H/Two-bicycles-on-beach.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5 className="text-color first">Welcome to cycle World</h5>
                    <p className="text-color">Easy To SHop & Be The First One</p>
                    <button className="banner-button bg-primary">Watch</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/2Mj8RBv/Two-bicycles-on-beach.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5 className="text-color">The Most Oldest Bike Collection</h5>
                    <p className="text-color first">Since 1900 ,We are The best</p>
                    <button className=" bg-primary banner-button">Watch</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-banner"
                    src="https://i.ibb.co/k9sFwNr/photo-1616257239988-0f2761084e6e.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5 className="text-color first">Keep Fit Your Body</h5>
                    <p className="text-color">Buy one Cycle , Buy One life</p>
                    <button className=" bg-primary banner-button">Watch</button>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                </Carousel>
        </div>
    );
};

export default Banner;