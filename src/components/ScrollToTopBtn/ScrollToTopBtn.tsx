import styled from '@emotion/styled';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { IconButton, IconButtonProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { smoothScrollToTop } from 'ts/scrollToTop';

import style from './ScrollToTopBtn.module.css';

const IconButtonDef = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  backgroundColor: 'var(--accent-color)',
  '&:hover': {
    backgroundColor: 'var(--accent-color)',
  },
  position: 'fixed',
  zIndex: '1000',
  right: '24px',
  bottom: '50px',
}));

export const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsVisible(scrollPosition > 2000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      {isVisible ? (
        <IconButtonDef className={style.buttonUp} onClick={smoothScrollToTop}>
          <ExpandLessIcon />
        </IconButtonDef>
      ) : null}
    </>
  );
};
