import {
    Box,
    Button,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useMemo } from 'react';

const IntroTitle = ({ onButtonClick = () => {} }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    const textAlign = useMemo(() => (isSmall ? 'center' : 'left'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 360,
            }}
        >
            <Typography
                fontSize={{ xs: 24, sm: 30, md: 39, lg: 45 }}
                fontWeight={'bold'}
                textAlign={textAlign}
                lineHeight={'115%'}
            >
                What are you working on?
            </Typography>
            <Typography
                fontSize={{ xs: 14, sm: 18, md: 25, lg: 28 }}
                textAlign={textAlign}
                marginTop={4}
            >
                Modern work furniture for whatever you're working on.
            </Typography>
            <Button
                sx={{ py: '12px', marginTop: 6 }}
                variant='outlined'
                onClick={onButtonClick}
            >
                SHOP NOW
            </Button>
        </Box>
    );
};

export default IntroTitle;
