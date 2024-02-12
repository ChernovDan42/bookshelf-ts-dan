import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { Logo } from '../Logo/Logo';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import style from './MobileHeader.module.css';
import clsx from 'clsx';

type Props = {
  toggle: () => void;
  isMobileNavOpen: boolean;
};

export const MobileHeader = ({ toggle, isMobileNavOpen }: Props) => {
  return (
    <AppBar
      color="primary"
      style={{ transition: 'background-color 0.3s linear,color 0.3s linear' }}
      sx={{
        display: 'block',
        borderRadius: '0px 0px 8px 8px',
      }}
      enableColorOnDark
    >
      <Box
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '375px',
          padding: '18px 20px',

          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ThemeSwitcher />
          <MenuOpenIcon
            style={{
              fontSize: 28,
              marginLeft: '14px',
              transition: 'transform 0.3s ease-in-out',
            }}
            onClick={toggle}
            className={clsx(isMobileNavOpen && style.isOpen)}
            aria-label="Open mobile site navigation"
          />
        </Box>
      </Box>
    </AppBar>
  );
};
