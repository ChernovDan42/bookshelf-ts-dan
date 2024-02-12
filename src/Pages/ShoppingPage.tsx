import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { EmptyShoppingList } from 'components/EmptyShoppingList/EmptyShoppingList';
import { PaginationBlock } from 'components/PaginationBlock/PaginationBlock';
import { ShoppingBookList } from 'components/ShoppingBookList/ShoppingBookList';
import { useState } from 'react';
import { Book } from 'Types';

import style from './ShoppingPage.module.css';

const ShoppingPage = () => {
  const [savedBooks, setSavedBooks] = useState<Book[]>(
    JSON.parse(localStorage.getItem('books') || '[]')
  );

  const [currentPage, setCurrentPage] = useState(1);

  const theme = useTheme();

  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  const itemsPerPage = isMdScreen ? 3 : 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = savedBooks.slice(startIndex, endIndex);
  const totalPages = Math.ceil(savedBooks.length / itemsPerPage);

  return (
    <Box className={style.shoppingListWrap}>
      <Typography variant="h2">
        Shopping <span className="accent-span">List</span>
      </Typography>

      {savedBooks.length === 0 ? (
        <EmptyShoppingList />
      ) : (
        <Box className={style.shoppingBooksListContainer}>
          <ShoppingBookList
            books={currentData}
            setSavedBooks={setSavedBooks}
            currentPage={currentPage}
          />
        </Box>
      )}

      {savedBooks.length > 0 ? (
        <PaginationBlock
          setPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      ) : null}
    </Box>
  );
};

export default ShoppingPage;
