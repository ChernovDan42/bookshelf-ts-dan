import { AppBar, Box, useMediaQuery, useTheme } from '@mui/material';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import style from './Header.module.css';

const Header = () => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));

  const width = isXlScreen
    ? '1440px'
    : isLgScreen
    ? '1276px'
    : isMdScreen
    ? '768px'
    : '100%';

  return (
    <AppBar
      color="primary"
      style={{ transition: 'background-color 0.3s linear,color 0.3s linear' }}
      enableColorOnDark
    >
      <Box
        className={style.header}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          left: 0,
          width,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Logo />
          <Navigation />
        </Box>
        <ThemeSwitcher />
      </Box>
    </AppBar>
  );
};

export default Header;
