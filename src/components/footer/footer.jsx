import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'secondary.main',
                paddingTop: '1rem',
                paddingBottom: '1rem',
            }}
            marginTop={6}
            position={'relative'}
        >
            <Container maxWidth='lg'>
                <Grid container direction='column' alignItems='center'>
                    <Grid item xs={12}>
                        <Typography color='black' variant='h6'>
                            ErgoCraft
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color='textSecondary' variant='subtitle1'>
                            2024 | React | Material UI
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Typography
                color='text.secondary'
                variant='subtitle1'
                fontSize={'0.9rem'}
                textAlign={'center'}
                position={'absolute'}
                bottom={0}
                right={28}
            >
                Made by K33p_Qu13t
            </Typography>
        </Box>
    );
};

export default Footer;
