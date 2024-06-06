import { Box, Button } from '@mui/material';

const IntroTitle = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 374,
            }}
        >
            <Box sx={{ fontSize: 45, lineHeight: '115%' }}>
                What are you working on?
            </Box>
            <Box sx={{ fontSize: 30, maxWidth: 468, marginTop: 4 }}>
                Modern work furniture for whatever you're working on.
            </Box>
            <Button sx={{ py: '12px', marginTop: 6 }} variant='outlined'>
                SHOP NOW
            </Button>
        </Box>
    );
};

export default IntroTitle;
