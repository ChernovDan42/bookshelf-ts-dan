import { useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { Aside } from 'components/Aside/Aside';
import { Donate } from 'components/Footer/Donate/Donate';
import { MobileModalNav } from 'components/MobileModalNav/MobileModalNav';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Heder';

import { MobileHeader } from './MobileHeader/MobileHeader';

//

const Layout = () => {
  const theme = useTheme();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<true | false>(false);
  const location = useLocation();
  const currentUrl = location.pathname;


  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const body = document.querySelector('body');
  useEffect(() => {
    if (isMobileNavOpen) {
      body?.classList.add('stop-scroll');
    } else {
      body?.classList.remove('stop-scroll');
    }
  }, [isMobileNavOpen, body]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      {isMdScreen ? (
        <Header />
      ) : (
        <MobileHeader
          toggle={toggleMobileNav}
          isMobileNavOpen={isMobileNavOpen}
        />
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <div className={clsx('container', isMdScreen && 'mainFlex')}>
          {currentUrl !== '/shopping-list' && <Aside />}
          <main>
            <Outlet />
          </main>
        </div>
        <footer>
          <Donate />
        </footer>
      </Suspense>
      <MobileModalNav isOpen={isMobileNavOpen} toggle={toggleMobileNav} />
    </>
  );
};

export default Layout;
