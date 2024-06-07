import { ThemePaletteModeContextProvider } from './themePaletteModeContextProvider';

const withThemePaletteModeContext = (Component) => (props) => {
    return (
        <ThemePaletteModeContextProvider>
            <Component {...props} />
        </ThemePaletteModeContextProvider>
    );
};

export default withThemePaletteModeContext;
