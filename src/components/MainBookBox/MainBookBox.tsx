import { Box, ListItem, Typography } from '@mui/material';
import { ModalBook } from 'components/ModalBook/ModalBook';
import { useEffect, useState } from 'react';
import { Book } from 'Types';

import style from './MainBookBox.module.css';

type Prop = {
  book: Book;
};

export const MainBookBox = ({ book }: Prop) => {
  const [isOpenModal, setIsOpenModal] = useState<true | false>(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  const handleKeydown = (event: { code: string }) => {
    if (event.code === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  return (
    <ListItem className={style.bookItem} sx={{ width: '100%' }}>
      <Box className={style.thumb}>
        <img
          src={book.book_image}
          alt="book image"
          className={style.bookImage}
          onClick={handleOpen}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
        onClick={handleOpen}
      >
        <Typography variant="subtitle1">{book.title}</Typography>
        <Typography variant="body2" color="text.categoryTitle">
          {book.author}
        </Typography>
      </Box>
      {isOpenModal && (
        <ModalBook
          isOpenModal={isOpenModal}
          handleClose={handleClose}
          book={book}
        />
      )}
    </ListItem>
  );
};
