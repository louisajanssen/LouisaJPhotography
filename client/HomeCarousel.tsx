import * as React from 'react';
import Carousel from 'react-material-ui-carousel';
// @ts-ignore
import graduateGirls from './assets/GirlsGraduate.jpg';

export const HomeCarousel: React.FC = () => {

    return (
        <div>
            <Carousel>
                <img src={graduateGirls}></img>
            </Carousel>
        </div>
    )
}