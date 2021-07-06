/* eslint-disable react/jsx-key */
import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import caroMom from './assets/CaroMomLaying.jpg';
import champagne from './assets/Champagne.jpg';
import chrissy from './assets/Chrissy.jpg';
import graduateGirls from './assets/GirlsGraduate.jpg';
import cheer from './assets/MartaAlanCheer.jpg';
import philChris from './assets/PhilChristoph.jpg';

const data = [
    {
     image: graduateGirls,
    },
    {
      image: cheer,
    },
    {
      image:philChris,
    },
    {
      image: chrissy,
    },
    {
      image: caroMom,
    },
    {
      image:champagne,
    }
  ]

export const HomeCarousel: React.FC = () => {

    return (
        <div>
            <Carousel>
            {data.map((slide, i) => {
                return (
                    <Carousel.Item interval={1000} >
                        <img
                            className="d-block w-100"
                            src={slide.image}
                            alt="slider image"
                            key={i}
                        />
                    </Carousel.Item>
                )
            })}
            </Carousel>
        </div>
    )
}
