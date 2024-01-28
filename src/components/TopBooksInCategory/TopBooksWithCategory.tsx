import { List, Typography, useMediaQuery, useTheme } from '@mui/material';
import { MainBookBox } from 'components/MainBookBox/MainBookBox';
import { TopBooksInCategory } from 'Types';

type Prop = {
  bookCategory: TopBooksInCategory;
};

export const TopBooksWithCategory = ({ bookCategory }: Prop) => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isXlScreen = useMediaQuery(theme.breakpoints.up('xl'));

  const { list_name, books } = bookCategory;

  const getBooksToShow = isXlScreen ? 5 : isLgScreen ? 4 : isMdScreen ? 3 : 1;
  const booksToRender = books.slice(0, getBooksToShow);

  return (
    <>
      <Typography variant="h3" color="text.categoryTitle">
        {list_name}
      </Typography>
      <List
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mb: '16px',
        }}
      >
        {booksToRender.map(book => {
          return <MainBookBox key={book._id} book={book} />;
        })}
      </List>
    </>
  );
};
