import { List, Typography } from '@mui/material';
import { Loader } from 'components/Loader/Loader';
import { MainBookBox } from 'components/MainBookBox/MainBookBox';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCategoryBooks } from 'ts/apiBooks';
import { Book } from 'Types';

import style from './CategoryPage.module.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCategoryBooks(category);
        setBooks(data?.data);
        setIsLoading(false);
      } catch (error) {
        toast.error('Something went wrong.Try again');
      }
    };
    fetchData();
  }, [category]);

  const getColorCategory = (category: string) => {
    const categorySplited = category.trim().split(' ');
    const categoryStart = categorySplited
      .slice(0, categorySplited.length - 1)
      .join(' ');
    const categotyEnd = categorySplited.pop();

    return (
      <Typography variant="h2">
        {`${categoryStart} `}
        <span className={style.colorLastWord}>{categotyEnd}</span>
      </Typography>
    );
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {category && getColorCategory(category)}

          <List
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              rowGap: '40px',
              columnGap: '24px',
              '@media screen and (min-width:1280px)': {
                columnGap: '39px',
              },
              '@media screen and (min-width:1440px)': {
                columnGap: '37px',
              },
            }}
          >
            {books.map(book => {
              return <MainBookBox key={book._id} book={book} />;
            })}
          </List>
        </>
      )}
    </>
  );
};

export default CategoryPage;
