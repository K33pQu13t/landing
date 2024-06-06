import { useTheme } from '@emotion/react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

const ProductCardContainer = ({ children, title, sx = {}, titleSx = {} }) => {
    const theme = useTheme();
    const isExtraSmall = useMediaQuery(theme.breakpoints.down('lg'));

    const justifyContent = useMemo(
        () => (isExtraSmall ? 'center' : 'space-between'),
        [isExtraSmall]
    );

    const titleElement = useMemo(() => {
        if (!title) {
            return null;
        }

        return (
            <Box
                sx={{ marginBottom: 2, ...titleSx }}
                display={'flex'}
                justifyContent={'center'}
            >
                <Typography variant='h4'>{title}</Typography>
            </Box>
        );
    }, [title]);

    return (
        <>
            {titleElement}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    ...sx,
                }}
                display={'flex'}
                justifyContent={'center'}
            >
                <Grid
                    container
                    maxWidth={'66%'}
                    justifyContent={justifyContent}
                    spacing={2}
                >
                    {children}
                </Grid>
            </Box>
        </>
    );
};

export default ProductCardContainer;
