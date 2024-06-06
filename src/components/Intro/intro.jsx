import React from 'react';
import PicWithOverlay from '../picWithOverlay/picWithOverlay.jsx';
import IntroTitle from './introTitle.jsx';

const Intro = () => {
    return (
        <PicWithOverlay
            image={
                'https://office-magnat.ru/thumb/2/es4y1VZ5aHozyJYUiqGOSQ/r/d/zion_smart_6.jpg'
            }
        >
            <IntroTitle />
        </PicWithOverlay>
    );
};

export default Intro;
