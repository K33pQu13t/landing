import { Box, Grid, Typography } from '@mui/material';
import { useMemo } from 'react';

const ProductCardContainer = ({
    children,
    title,
    sx = {},
    titleSx = {},
    rootRef = null,
}) => {
    const titleElement = useMemo(() => {
        if (!title) {
            return null;
        }

        return (
            <Box
                sx={titleSx}
                display={'flex'}
                marginBottom={2}
                justifyContent={'center'}
            >
                <Typography variant='h4' textAlign={'center'}>
                    {title}
                </Typography>
            </Box>
        );
    }, [title]);

    return (
        <div ref={rootRef}>
            {titleElement}
            <Box
                sx={{
                    ...sx,
                }}
                display={'flex'}
                justifyContent={'center'}
            >
                <Grid
                    container
                    maxWidth={'66%'}
                    justifyContent={{ sm: 'space-between', md: 'center' }}
                    spacing={2}
                >
                    {children}
                </Grid>
            </Box>
        </div>
    );
};

export default ProductCardContainer;
