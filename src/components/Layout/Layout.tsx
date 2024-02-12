import { useMediaQuery, useTheme } from '@mui/material';
import { Bounce, ToastContainer } from 'react-toastify';
import clsx from 'clsx';
import { Aside } from 'components/Aside/Aside';
import { Donate } from 'components/Footer/Donate/Donate';
import { MobileModalNav } from 'components/MobileModalNav/MobileModalNav';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header/Heder';

import { MobileHeader } from './MobileHeader/MobileHeader';
import { Loader } from 'components/Loader/Loader';
import { ScrollToTopBtn } from 'components/ScrollToTopBtn/ScrollToTopBtn';

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

      <div className={clsx('container', isMdScreen && 'mainFlex')}>
        {currentUrl !== '/shopping-list' && <Aside />}
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <footer>
        <Donate />
      </footer>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.palette.mode === 'light' ? 'light' : 'dark'}
        transition={Bounce}
      />

      <MobileModalNav isOpen={isMobileNavOpen} toggle={toggleMobileNav} />
      <ScrollToTopBtn />
    </>
  );
};

export default Layout;
