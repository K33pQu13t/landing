import PicWithOverlay from '../picWithOverlay/picWithOverlay.jsx';
import IntroTitle from './introTitle.jsx';
import React, { useMemo } from 'react';

const Intro = () => {
    const introTitle = useMemo(() => <IntroTitle />, []);

    return (
        <PicWithOverlay
            image={
                'https://www.branchfurniture.com/cdn/shop/files/pl-branch-conference-table-fa22-detail-866_2.jpg'
            }
            content={introTitle}
        />
    );
};

export default Intro;
