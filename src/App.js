import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Footer from './components/footer/footer.jsx';
import ResponsiveAppBar from './components/responsiveAppBar/responsiveAppBar.jsx';
import LandingPage from './pages/landingPage.jsx';
import { useContext, useMemo, useState } from 'react';
import { ThemePaletteModeContext } from './contexts/themePaletteModeContext/themePaletteModeContextProvider.jsx';
import withThemePaletteModeContext from './contexts/themePaletteModeContext/withThemePaletteModeContext.jsx';

const primaryMainColor = '#EB5CAF';
const secondaryMainColor = '#BAD9B5';
const textSelectedBackgroundColor = '#723161';

function App() {
    const { mode } = useContext(ThemePaletteModeContext);

    const appTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                    primary: {
                        main: primaryMainColor,
                    },
                    secondary: {
                        main: secondaryMainColor,
                    },
                },
                components: {
                    MuiCssBaseline: {
                        styleOverrides: {
                            '::selection': {
                                backgroundColor: textSelectedBackgroundColor,
                                color: 'white',
                            },
                        },
                    },
                    MuiTouchRipple: {
                        styleOverrides: {
                            ripple: {
                                color: secondaryMainColor,
                            },
                        },
                    },
                },
            }),
        [mode]
    );

    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />

            <ResponsiveAppBar />
            <LandingPage />
            <Footer />
        </ThemeProvider>
    );
}

export default withThemePaletteModeContext(App);
