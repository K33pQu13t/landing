import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Footer from './components/footer/footer.jsx';
import ResponsiveAppBar from './components/responsiveAppBar/responsiveAppBar.jsx';
import LandingPage from './pages/landingPage.jsx';

const appTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#EB5CAF',
        },
        secondary: {
            main: '#BAD9B5',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '::selection': {
                    backgroundColor: '#723161',
                    color: 'white',
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />

            <ResponsiveAppBar />
            <LandingPage />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
