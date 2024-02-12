import { Box, Typography } from '@mui/material';
import { noBookDescription } from 'constants/index';
import { truncateBookName } from 'ts/helpers';
import { Book } from 'Types';

import style from './ShoppingBookTypography.module.css';

type Props = {
  book: Book;
};

export const ShoppingBookTypography = ({ book }: Props) => {
  return (
    <>
      <Box className={style.titleWrap}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '18px',
            letterSpacing: '-0.8px',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {book.title}
        </Typography>
      </Box>
      <Box className={style.categoryWrap}>
        <Typography
          variant="subtitle2"
          color="text.categoryTitle"
          sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
        >
          {book.list_name}
        </Typography>
      </Box>
      <Box className={style.descriptionWrap}>
        <Typography
          variant="body1"
          color="text.primary"
          sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
        >
          {book.description
            ? book.description
            : truncateBookName(noBookDescription)}
        </Typography>
      </Box>
    </>
  );
};
