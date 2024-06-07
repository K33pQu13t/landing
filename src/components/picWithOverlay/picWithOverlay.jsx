import { Box, Card, CardMedia, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { useTheme } from '@mui/material';

const _16x9 = '56.25%';
const mobile = '73.25%';

const PicWithOverlay = ({ image, children }) => {
    const theme = useTheme();
    const shouldBeAtCenter = useMediaQuery(theme.breakpoints.down('md'));
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const cardMediaSize = useMemo(() => (isSmall ? mobile : _16x9), [isSmall]);

    const cardMediaStyles = useMemo(() => {
        const styles = {
            height: 0,
            paddingTop: cardMediaSize,
            maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        };

        if (theme.palette.mode === 'dark') {
            styles.opacity = 0.8;
        }

        return styles;
    }, [theme.palette.mode, cardMediaSize]);

    const childrenContainerStyles = useMemo(() => {
        const styles = {
            position: 'absolute',
            bottom: '4vh',
            left: '1.1em',
            color: 'white',
        };

        if (shouldBeAtCenter) {
            styles.left = '50%';
            styles.transform = 'translateX(-50%)';
        }

        return styles;
    }, [shouldBeAtCenter]);

    return (
        <Card sx={{ position: 'relative', borderRadius: 0, boxShadow: 'none' }}>
            <CardMedia sx={cardMediaStyles} image={image} />
            <Box sx={childrenContainerStyles}>{children}</Box>
        </Card>
    );
};

export default PicWithOverlay;
