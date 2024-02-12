import { Box, Typography } from '@mui/material';
import emptyList from 'images/emptyList.png';
import emptyList2x from 'images/emptyList@2x.png';

import style from './EmptyShoppingList.module.css';

export const EmptyShoppingList = () => {
  const isRetina = window.devicePixelRatio > 1.1;
  return (
    <Box className={style.emptyListWrap}>
      <Typography
        variant="body1"
        sx={{ fontSize: '18px', lineHeight: '24px', letterSpacing: '-0.34px' }}
      >
        This page is empty, add some books and proceed to order.
      </Typography>
      <img
        src={isRetina ? emptyList2x : emptyList}
        alt="empty list"
        className={style.emplyListPng}
      />
    </Box>
  );
};
