import { Backdrop, Box, Fade, Modal, useTheme } from '@mui/material';
import { Book } from 'Types';
import { ToggleBookBtn } from './AddOrRemoveBookButton/ToggleBookBtn';
import { BookBuyLinks } from '../BookBuyLinks/BookBuyLinks';
import CloseIcon from '@mui/icons-material/Close';

import style from './ModalBook.module.css';
import { TypographyBlock } from './TypographyBlock/TypographyBlock';

type Props = {
  handleClose: () => void;
  isOpenModal: boolean;
  book: Book;
};

export const ModalBook = ({ isOpenModal, handleClose, book }: Props) => {
  const theme = useTheme();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpenModal}>
          <Box
            className={style.modalBox}
            sx={{
              bgcolor: 'background.paper',
              outline: 0,
              border:
                theme.palette.mode === 'light'
                  ? '2px solid #111'
                  : '2px solid #FFF',
              width: '332px',
              padding: '40px 22px',
              '@media screen and (min-width:768px)': {
                width: '579px',
                padding: '40px',
              },
            }}
          >
            <CloseIcon
              className={style.closeBtn}
              onClick={handleClose}
              sx={{
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.3)',
                },
              }}
              aria-label="Close book info button"
            />
            <Box className={style.flexBox}>
              <Box className={style.thumb}>
                <img src={book.book_image} alt="book label" loading="lazy" />
              </Box>
              <Box className={style.bookInfoBox}>
                <TypographyBlock book={book} />
                <BookBuyLinks book={book} />
              </Box>
            </Box>
            <ToggleBookBtn book={book} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
