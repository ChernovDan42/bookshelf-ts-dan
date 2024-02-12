import { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import {
  loadFromLocalStorage,
  addObjectToLocalArray,
  removeObjectFromLocalArray,
} from 'ts/localStorageService';
import { Book } from 'Types';

const buttonStyles = {
  borderRadius: '40px',
  border: '2px solid #4F2EE8',
  padding: '14px 18px',
  transition: 'backgroundColor 0.3s ease-in -out, color 0.5s ease-in-out',

  color: 'text.primary',

  mr: 'auto',
  ml: 'auto',
  '&:hover': {
    backgroundColor: '#4F2EE8',
    color: '#FFF',
  },
};

type Props = {
  book: Book;
};

export const ToggleBookBtn = ({ book }: Props) => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(loadFromLocalStorage('books'));

  useEffect(() => {
    const isBookAdded = data.find((bookEl: Book) => bookEl._id === book._id);
    setToggle(isBookAdded);
  }, [book._id, data]);

  const addBook = (key: string, object: object) => {
    const newData = addObjectToLocalArray(key, object);
    setData(newData);
    toast.success('Book successfully added to your bag');
  };

  const removeBook = (key: string, object: Book) => {
    const newData = removeObjectFromLocalArray(key, object);
    setData(newData);
    toast.error('Book successfully removed from your bag');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onClick={
          toggle
            ? () => removeBook('books', book)
            : () => addBook('books', book)
        }
        sx={buttonStyles}
      >
        {toggle ? 'Remove from shopping list' : 'Add to shopping list'}
      </Button>
    </Box>
  );
};
