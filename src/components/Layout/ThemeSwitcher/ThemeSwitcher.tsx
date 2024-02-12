import { styled, useTheme } from '@mui/material';
import { useContext } from 'react';
import ColorModeContext from 'styles/theme/ColorModeContext';

import Switch, { switchClasses } from '@mui/material/Switch';

export const SwitchTextTrack = styled(Switch)({
  width: '40px',
  height: '20px',
  padding: '2px',
  [`& .${switchClasses.switchBase}`]: {
    padding: 5,
    color: '#ff6a00',
  },
  [`& .${switchClasses.thumb}`]: {
    width: '10px',
    height: '10px',
    backgroundColor: '#fff',
  },
  [`& .${switchClasses.track}`]: {
    background: 'linear-gradient(180deg, #4F2EE8 0%, #DCDCDC 100%)',
    opacity: '1 !important',
    borderRadius: 10,
    position: 'relative',
    '&:before, &:after': {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      width: '50%',
      transform: 'translateY(-50%)',
      color: '#fff',
      textAlign: 'center',
      fontSize: '0.75rem',
      fontWeight: 500,
    },
  },
  [`& .${switchClasses.checked}`]: {
    [`&.${switchClasses.switchBase}`]: {
      color: '#185a9d',
      transform: 'translateX(20px)',
      '&:hover': {
        backgroundColor: 'rgba(24,90,257,0.08)',
      },
    },
    [`& .${switchClasses.thumb}`]: {
      backgroundColor: '#fff',
    },
    [`& + .${switchClasses.track}`]: {
      background: 'linear-gradient(180deg, #4F2EE8 0%, #686868 100%)',
      '&:before': {
        opacity: 1,
      },
      '&:after': {
        opacity: 0,
      },
    },
  },
});

export const ThemeSwitcher = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <SwitchTextTrack
      onClick={colorMode.toggleColorMode}
      aria-label="Switch theme mode"
      checked={theme.palette.mode === 'light' ? false : true}
    />
  );
};
