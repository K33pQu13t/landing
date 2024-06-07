import { useTheme } from '@mui/material';
import { Grid, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

const ProductCardCell = ({ sm, lg, children, justifyContent = 'center' }) => {
    const theme = useTheme();
    const isColumnLayout = useMediaQuery(theme.breakpoints.down('lg'));

    const patchedJustifyContent = useMemo(
        () => (isColumnLayout ? 'center' : justifyContent),
        [isColumnLayout, justifyContent]
    );

    return (
        <Grid
            item
            sm={sm}
            lg={lg}
            display={'flex'}
            justifyContent={patchedJustifyContent}
        >
            {children}
        </Grid>
    );
};

export default ProductCardCell;
