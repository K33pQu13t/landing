import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, useTheme } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { ThemePaletteModeContext } from '../../contexts/themePaletteModeContext/themePaletteModeContextProvider';

const SwitchModeButton = () => {
    const theme = useTheme();
    const { switchMode } = useContext(ThemePaletteModeContext);
    const buttonIcon = useMemo(
        () =>
            theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
            ) : (
                <Brightness4Icon />
            ),
        [theme.palette.mode]
    );

    return <IconButton onClick={switchMode}>{buttonIcon}</IconButton>;
};

export default React.memo(SwitchModeButton);
