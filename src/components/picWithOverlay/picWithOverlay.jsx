import { Box, Card, CardMedia, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import { useTheme } from '@mui/material';

const _16x9 = '56.25%';
const mobile = '73.25%';

const PicWithOverlay = ({ image, children }) => {
    const theme = useTheme();

    const cardMediaStyles = useMemo(() => {
        const styles = {
            height: 0,
            paddingTop: { xs: mobile, sm: _16x9 },
            maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
        };

        if (theme.palette.mode === 'dark') {
            styles.opacity = 0.8;
        }

        return styles;
    }, [theme.palette.mode]);

    return (
        <Card sx={{ position: 'relative', borderRadius: 0, boxShadow: 'none' }}>
            <CardMedia sx={cardMediaStyles} image={image} />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '4vh',
                    left: { xs: '50%', sm: '50%', md: '1.1em' },
                    transform: {
                        xs: 'translateX(-50%)',
                        sm: 'translateX(-50%)',
                        md: 'none',
                    },
                    color: 'white',
                }}
            >
                {children}
            </Box>
        </Card>
    );
};

export default PicWithOverlay;
