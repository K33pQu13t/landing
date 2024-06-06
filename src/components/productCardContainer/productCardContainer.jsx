import { useTheme } from '@emotion/react';
import { Box, Grid, Typography, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';

const ProductCardContainer = ({
    children,
    title,
    sx = {},
    titleSx = {},
    rootRef = null,
}) => {
    const theme = useTheme();
    const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('lg'));

    const justifyContent = useMemo(
        () => (isMediumOrSmaller ? 'center' : 'space-between'),
        [isMediumOrSmaller]
    );

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
        </div>
    );
};

export default ProductCardContainer;
