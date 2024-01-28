import { List, Typography } from '@mui/material';
import { MainBookBox } from 'components/MainBookBox/MainBookBox';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoryBooks } from 'ts/apiBooks';
import { Book } from 'Types';

import style from './CategoryPage.module.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryBooks(category);
        setBooks(data?.data);
      } catch (error) {}
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
      {category && getColorCategory(category)}
      <List
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: '40px',
          columnGap: '24px',
        }}
      >
        {books.map(book => {
          return <MainBookBox key={book._id} book={book} />;
        })}
      </List>
    </>
  );
};

export default CategoryPage;
