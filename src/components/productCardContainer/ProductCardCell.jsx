import { Grid } from '@mui/material';

const ProductCardCell = ({ sm, lg, children, justifyContent = 'center' }) => {
    return (
        <Grid
            item
            sm={sm}
            lg={lg}
            display={'flex'}
            justifyContent={{
                xs: 'center',
                sm: 'center',
                md: 'center',
                lg: justifyContent,
            }}
        >
            {children}
        </Grid>
    );
};

export default ProductCardCell;
