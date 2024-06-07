import { createContext, useState } from 'react';

export const ThemePaletteModeContext = createContext({});

const ModesMap = new Map([
    ['dark', 'light'],
    ['light', 'dark'],
]);

export const ThemePaletteModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('dark');

    const switchMode = () => {
        setMode((prev) => ModesMap.get(prev));
    };

    const contextProperties = {
        mode,
        switchMode,
    };

    return (
        <ThemePaletteModeContext.Provider value={contextProperties}>
            {children}
        </ThemePaletteModeContext.Provider>
    );
};
