import { Box, List } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCategories } from 'ts/apiBooks';
import style from './Categories.module.css';
import { AsideLink } from '../AsideLink/AsideLink';

type Category = {
  list_name: string;
};

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <Box className={style.categoriesList}>
      <List>
        <AsideLink page={'/'}>All Categories</AsideLink>
        {categories?.map(category => {
          const { list_name } = category;
          return (
            <AsideLink key={list_name} page={`/${list_name}`}>
              {list_name}
            </AsideLink>
          );
        })}
      </List>
    </Box>
  );
};
