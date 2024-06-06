import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
    CssBaseline,
    Grid,
    Paper,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import './App.css';
import Intro from './components/Intro/intro.jsx';
import ResponsiveAppBar from './components/responsiveAppBar/responsiveAppBar.jsx';

const appTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <ResponsiveAppBar />
            <Intro />
        </ThemeProvider>
    );
}

export default App;
