import { Box, Card, CardMedia, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { useTheme } from '@emotion/react';

const _16x9 = '56.25%';
const mobile = '73.25%';

const PicWithOverlay = ({ image, children }) => {
    const theme = useTheme();
    const shouldBeAtCenter = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const adaptiveStyles = useMemo(() => {
        const styles = {
            position: 'absolute',
            bottom: '4vh',
            left: '1.1em',
            color: 'white',
        };
        let adaptiveStyles = {};

        if (shouldBeAtCenter) {
            adaptiveStyles = { left: '50%', transform: 'translateX(-50%)' };
        }

        return { ...styles, ...adaptiveStyles };
    }, [shouldBeAtCenter]);

    const cardMediaSize = useMemo(() => (isSmall ? mobile : _16x9), [isSmall]);

    return (
        <Card sx={{ position: 'relative', borderRadius: 0 }}>
            <CardMedia
                sx={{
                    height: 0,
                    paddingTop: cardMediaSize,
                    maskImage:
                        'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
                    opacity: 0.8,
                }}
                image={image}
            />
            <Box sx={adaptiveStyles}>{children}</Box>
        </Card>
    );
};

export default PicWithOverlay;
