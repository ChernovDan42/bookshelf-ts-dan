import { ListItem, Typography } from '@mui/material';
import { ModalBook } from 'components/ModalBook/ModalBook';
import { useEffect, useState } from 'react';
import { Book } from 'Types';

import { truncateBookName } from 'ts/helpers';

import style from './MainBookBox.module.css';

type Prop = {
  book: Book;
};

const itemStyles = {
  flexDirection: 'column',
  width: '335px',
  '@media screen and (min-width: 768px)': {
    width: '150px',
  },
  '@media screen and (min-width: 1280px)': {
    width: '190px',
  },
  '@media screen and (min-width: 1440px)': {
    width: '180px',
  },
};

export const MainBookBox = ({ book }: Prop) => {
  const [isOpenModal, setIsOpenModal] = useState<true | false>(false);
  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => setIsOpenModal(false);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  function handleKeydown(event: { code: string }) {
    if (event.code === 'Escape') {
      handleClose();
    }
  }

  return (
    <ListItem sx={itemStyles} >
      <div className={style.thumb}>
        <div className={style.onHoverDiv} onClick={handleOpen}>
          quick view
        </div>
        <img
          src={book.book_image}
          alt="book label"
          className={style.bookImage}
        />
      </div>

      <Typography variant="subtitle1">
        {truncateBookName(book.title)}
      </Typography>
      <Typography
        variant="body2"
        color="text.categoryTitle"
        sx={{ marginTop: 'auto' }}
      >
        {book.author}
      </Typography>
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
