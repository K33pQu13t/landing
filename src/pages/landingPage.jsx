import { useRef } from 'react';
import Intro from '../components/intro/intro.jsx';
import ProductCard from '../components/productCard/productCard.jsx';
import ProductCardCell from '../components/productCardContainer/productCardCell.jsx';
import ProductCardContainer from '../components/productCardContainer/productCardContainer.jsx';

const wideCardHeight = 380;
const longCardHeight = 450;

const LandingPage = () => {
    const catalogContainerRef = useRef();

    const onShopNowButtonClick = () => {
        catalogContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Intro onButtonClick={onShopNowButtonClick} />

            <ProductCardContainer
                titleSx={{ paddingTop: 12 }}
                title={'Wherever you are, work your best'}
            >
                <ProductCardCell lg={6} justifyContent='flex-start'>
                    <ProductCard
                        image={
                            'https://rnb.scene7.com/is/image/roomandboard/parsons_247860_23e?$prodzoom0$&size=2400,2400&scl=1'
                        }
                        title={'Home Office'}
                        description={'Work essentials for everyday use'}
                        maxWidth={'auto'}
                        imageHeight={wideCardHeight}
                    />
                </ProductCardCell>
                <ProductCardCell lg={6} justifyContent='flex-end'>
                    <ProductCard
                        image={
                            'https://i.pinimg.com/736x/9d/c1/8a/9dc18aed6f3d622268c4aa1e97db09fd.jpg'
                        }
                        title={'Team Office'}
                        description={'Solutions for teams of all sizes'}
                        maxWidth={'auto'}
                        imageHeight={wideCardHeight}
                    />
                </ProductCardCell>
            </ProductCardContainer>

            <ProductCardContainer
                rootRef={catalogContainerRef}
                titleSx={{ paddingTop: 6 }}
                title={'Explore our products'}
            >
                <ProductCardCell sm={12} lg={4} justifyContent='flex-start'>
                    <ProductCard
                        image={
                            'https://www.vari.com/dw/image/v2/BDFT_PRD/on/demandware.static/-/Sites-vari-master-catalog/default/dw804539ef/images/large/ST-TSKCHR/400663-black/vari-task-chair_400663_black_office.jpg?sw=800&sh=800'
                        }
                        title={'Chairs'}
                        description={'SEE ALL'}
                        imageHeight={longCardHeight}
                        textCentered
                    />
                </ProductCardCell>
                <ProductCardCell sm={12} lg={4}>
                    <ProductCard
                        image={
                            'https://www.branchfurniture.com/cdn/shop/files/Woodgrain-PowderWhite.jpg?v=1716298277&width=540'
                        }
                        title={'Desks'}
                        description={'SEE ALL'}
                        imageHeight={longCardHeight}
                        textCentered
                    />
                </ProductCardCell>
                <ProductCardCell sm={12} lg={4} justifyContent='flex-end'>
                    <ProductCard
                        image={
                            'https://www.modernfurnituredeals.co.uk/cdn/shop/products/zone-wall-shelf-oak-furniturewall-shelves-modern-design-sale-uk_7b21cee9-ad1a-439a-b475-5b002d73b158.jpg?v=1625142502'
                        }
                        title={'Accessories'}
                        description={'SEE ALL'}
                        imageHeight={longCardHeight}
                        textCentered
                    />
                </ProductCardCell>
            </ProductCardContainer>
        </>
    );
};

export default LandingPage;
