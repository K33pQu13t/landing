import React from 'react';
import PicWithOverlay from '../picWithOverlay/picWithOverlay.jsx';
import IntroTitle from './introTitle.jsx';

const Intro = ({ onButtonClick = () => {} }) => {
    return (
        <PicWithOverlay
            image={
                'https://office-magnat.ru/thumb/2/es4y1VZ5aHozyJYUiqGOSQ/r/d/zion_smart_6.jpg'
            }
        >
            <IntroTitle onButtonClick={onButtonClick} />
        </PicWithOverlay>
    );
};

export default Intro;
