import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../image/Banner/images.jpg'
import banner2 from '../../../image/Banner/images1.jpg'
import banner3 from '../../../image/Banner/images2.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
            />
            <Carousel.Caption>
            <h3 className='clr'>MEN’S SHOPPING AT MYNTRA: A SUPERIOR EXPERIENCE</h3>
                <p  className='clr'>Myntra is one of the best sites when it comes to online shopping for men..s</p>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
            />

            <Carousel.Caption>
            <h3 className='clr'>ONLINE SHOPPING FOR MEN: OPTIONS UNLIMITED</h3>
                <p className='clr'>At Myntra, our online shopping fashion for men collection features plenty of options to create multiple outfits. At our men’s online shop we have brought together an exhaustive range of products from the best men’s brands. Here is a list of must-haves from the wide variety of awesome products at Myntra:.</p>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className='clr'>MEN’S SHOPPING MADE EASY AT MYNTRA</h3>
                <p className='clr'>
                Myntra is the most convenient men’s online store, what with our simplified shopping and payment procedures. With just a few clicks of the mouse or taps on your smartphone, you can buy your favorites from the best men’s brands right away.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
};

export default Banner;