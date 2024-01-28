import { List, ListItem } from '@mui/material';
import { SeeMoreBtn } from 'components/SeeMoreBtn/SeeMoreBtn';
import { TopBooksWithCategory } from 'components/TopBooksInCategory/TopBooksWithCategory';
import { useEffect, useState } from 'react';
import { getTopBooks } from 'ts/apiBooks';
import { TopBooksInCategory } from 'Types';

export const TopBooksList = () => {
  const [booksList, setBooksList] = useState<TopBooksInCategory[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getTopBooks();
      setBooksList(response?.data);
    };
    fetch();
  }, []);

  return (
    <List>
      {booksList.map(booksCategory => {
        return (
          <ListItem
            key={booksCategory.list_name}
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              ':not(:last-child)': {
                mb: '40px',
              },
            }}
          >
            <TopBooksWithCategory bookCategory={booksCategory} />
            <SeeMoreBtn page={booksCategory.list_name} />
          </ListItem>
        );
      })}
    </List>
  );
};
