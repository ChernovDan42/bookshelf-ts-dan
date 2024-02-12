import { Typography } from '@mui/material';
import { noBookDescription } from 'constants/index';
import { Book } from 'Types';


type Props = {
  book: Book;
};

export const TypographyBlock = ({ book }: Props) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: 700,
          lineHeight: '28px',
          letterSpacing: '-0.96px',
          mb: '8px',
        }}
      >
        {book.title}
      </Typography>
      <Typography
        variant="body2"
        color="text.categoryTitle"
        sx={{ mb: '18px' }}
      >
        {book.author}
      </Typography>
      <Typography variant="body1" sx={{ mb: '18px' }}>
        {book.description ? book.description : noBookDescription}
      </Typography>
    </>
  );
};
