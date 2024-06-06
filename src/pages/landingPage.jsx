import Intro from '../components/Intro/intro.jsx';
import ProductCard from '../components/productCard/productCard.jsx';
import ProductCardCell from '../components/productCardContainer/ProductCardCell.jsx';
import ProductCardContainer from '../components/productCardContainer/productCardContainer.jsx';
const LandingPage = () => {
    return (
        <>
            <Intro />

            <ProductCardContainer
                titleSx={{ paddingTop: 12 }}
                title={'Wherever you are, work your best'}
            >
                <ProductCardCell lg={6}>
                    <ProductCard
                        image={
                            'https://www.branchfurniture.com/cdn/shop/files/Branch_March2023-224_3_1.jpg'
                        }
                        maxWidth={'auto'}
                        title={'Home Office'}
                        description={'Work essentials for everyday use'}
                    />
                </ProductCardCell>
                <ProductCardCell lg={6}>
                    <ProductCard
                        image={
                            'https://www.branchfurniture.com/cdn/shop/files/pl-branch-conference-table-fa22-detail-866_2.jpg'
                        }
                        maxWidth={'auto'}
                        title={'Team Office'}
                        description={'Solutions for teams of all sizes'}
                    />
                </ProductCardCell>
            </ProductCardContainer>

            <ProductCardContainer
                titleSx={{ paddingTop: 6 }}
                title={'Explore our products'}
            >
                <ProductCardCell sm={12} lg={4} justifyContent='flex-start'>
                    <ProductCard
                        image={
                            'https://www.branchfurniture.com/cdn/shop/files/Desks_6b21f763-4f8b-421b-9f03-375da3e13b18.jpg'
                        }
                        title={'Desks'}
                        description={'SEE ALL'}
                        textCentered
                    />
                </ProductCardCell>
                <ProductCardCell sm={12} lg={4}>
                    <ProductCard
                        image={
                            'https://www.branchfurniture.com/cdn/shop/files/Office_Chairs.jpg'
                        }
                        title={'Chairs'}
                        description={'SEE ALL'}
                        textCentered
                    />
                </ProductCardCell>
                <ProductCardCell sm={12} lg={4} justifyContent='flex-end'>
                    <ProductCard
                        image={
                            'https://www.branchfurniture.com/cdn/shop/files/Accessories_fccae7c6-505a-4204-b0db-22c1fbe51e75.jpg'
                        }
                        title={'Accessories'}
                        description={'SEE ALL'}
                        textCentered
                    />
                </ProductCardCell>
            </ProductCardContainer>
        </>
    );
};

export default LandingPage;
