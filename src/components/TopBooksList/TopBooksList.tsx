import { List, ListItem, Typography } from '@mui/material';
import { Loader } from 'components/Loader/Loader';
import { SeeMoreBtn } from 'components/SeeMoreBtn/SeeMoreBtn';
import { TopBooksWithCategory } from 'components/TopBooksInCategory/TopBooksWithCategory';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getTopBooks } from 'ts/apiBooks';
import { TopBooksInCategory } from 'Types';

export const TopBooksList = () => {
  const [booksList, setBooksList] = useState<TopBooksInCategory[]>([]);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const response = await getTopBooks();
        setBooksList(response?.data);
        setIsLoading(false);
      } catch (error) {
        toast.error('Something went wrong.Try again');
      }
    };

    fetch();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Typography variant="h2">
            Best Sellers <span className="accent-span">Books</span>
          </Typography>
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
        </>
      )}
    </>
  );
};
