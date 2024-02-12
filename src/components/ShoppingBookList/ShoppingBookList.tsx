import { ShoppingBookItem } from 'components/ShoppingBookItem/ShoppingBookItem';
import { Book } from 'Types';

import style from './ShoppingBookList.module.css';

type Props = {
  books: Book[];
  setSavedBooks: (books: Book[]) => void;
  currentPage: number;
};

export const ShoppingBookList = ({ books, setSavedBooks }: Props) => {
  const handleDelete = (id: string) => {
    const booksJSON = localStorage.getItem('books');
    const books: Book[] = booksJSON ? JSON.parse(booksJSON) : [];
    const sortedBooks = books.filter(book => book._id !== id);
    localStorage.setItem('books', JSON.stringify(sortedBooks));
    setSavedBooks(sortedBooks);
  };

  return (
    <ul className={style.addedBooksList}>
      {books &&
        books.map((book: Book) => {
          return (
            <ShoppingBookItem
              key={book.title}
              book={book}
              handleDelete={handleDelete}
            />
          );
        })}
    </ul>
  );
};
