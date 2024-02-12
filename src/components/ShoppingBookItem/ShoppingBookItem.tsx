import { ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Book } from 'Types';
import { BookBuyLinks } from '../BookBuyLinks/BookBuyLinks';

import { ShoppingBookTypography } from './ShoppingBookTypography/ShoppingBookTypography';
import { DeleteButton } from './DeleteButton/DeleteButton';
import { useEffect, useState } from 'react';
import { ModalBook } from 'components/ModalBook/ModalBook';

import { motion } from 'framer-motion';

import style from './ShoppingBookItem.module.css';

type Props = {
  book: Book;
  handleDelete: (id: string) => void;
};

export const ShoppingBookItem = ({ book, handleDelete }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<true | false>(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  function handleKeydown(event: { code: string }) {
    if (event.code === 'Escape') {
      toggleModal();
    }
  }

  return (
    <motion.div
      key={book._id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: 10 }}
      transition={{ duration: 1 }}
      className={style.motion}
    >
      <ListItem
        sx={{
          bgcolor: 'background.paper',
          outline: 0,
          borderRadius: '16px',
          border: '2px solid #4F2EE8',
          width: '335px',
          padding: '14px',

          '@media screen and (min-width:768px)': {
            width: '704px',
            height: '213px',
            padding: '24px',
          },
          '@media screen and (min-width:1280px)': {
            width: '996px',
            height: '213px',
            padding: '24px',
          },
        }}
      >
        <DeleteButton handleDelete={handleDelete} id={book._id} />
        <Box className={style.thumb} onClick={toggleModal}>
          <img
            src={book.book_image}
            alt="book label"
            className={style.bookImg}
            loading="lazy"
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <ShoppingBookTypography book={book} />
          <Box className={style.authorAndLinksWrap}>
            <Typography variant="body2" color="text.categoryTitle">
              {book.author}
            </Typography>
            <BookBuyLinks book={book} />
          </Box>
        </Box>
        {isOpenModal && (
          <ModalBook
            isOpenModal={isOpenModal}
            handleClose={toggleModal}
            book={book}
          />
        )}
      </ListItem>
    </motion.div>
  );
};
