import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { Book } from 'Types';

import style from './ModalBook.module.css';

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

type Props = {
  handleClose: () => void;
  isOpenModal: boolean;
  book: Book;
};

export const ModalBook = ({ isOpenModal, handleClose, book }: Props) => {
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
            sx={{ bgcolor: 'background.paper', outline: 0 }}
          >
            <Box className={style.thumba}>
              <img
                src={book.book_image}
                alt="book image"
                className={style.bookImg}
              />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
