import { Box, List } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCategories } from 'ts/apiBooks';
import style from './Categories.module.css';
import { AsideLink } from '../AsideLink/AsideLink';
import { CategoryLoader } from 'components/Loader/CategoryLoader';
import { toast } from 'react-toastify';

type Category = {
  list_name: string;
};

export const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState<true | false>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await getCategories();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        toast.error('Something goes wrong.Try reload the page');
      }
    };
    fetchData();
  }, []);

  return (
    <Box className={style.categoriesList}>
      {isLoading ? (
        <CategoryLoader />
      ) : (
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
      )}
    </Box>
  );
};
