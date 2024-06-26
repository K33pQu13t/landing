import { Box, Container, Grid, Typography, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const textColor = theme.palette.getContrastText(theme.palette.primary.main);

    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'primary.main',
                py: '0.1rem',
            }}
            marginTop={6}
            position={'relative'}
        >
            <Container maxWidth='lg'>
                <Grid container direction='column' alignItems='center'>
                    <Grid item xs={12}>
                        <Typography color={textColor} variant='h6'>
                            ErgoCraft
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color='text.secondary' variant='subtitle2'>
                            2024 | React | Material UI
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Typography
                color='text.secondary'
                variant='subtitle2'
                fontSize={{ xs: '0.7rem', sm: '0.9rem' }}
                textAlign={'center'}
                position={'absolute'}
                bottom={0}
                right={{ xs: 4, sm: 28 }}
            >
                Made by K33p_Qu13t
            </Typography>
        </Box>
    );
};

export default Footer;
