import amazon2x from 'images/Amazon@2x.png';
import ibooks2x from 'images/ibooks@2x.png';
import bookShop2x from 'images/bookShop@2x.png';
import amazon from 'images/Amazon.png';
import ibooks from 'images/ibooks.png';
import bookShop from 'images/bookShop.png';
import amazonLight from 'images/AmazonLight.png';
import amazonLight2x from 'images/AmazonLight@2x.png';

import style from './BookBuyLinks.module.css';

import { Book } from 'Types';
import { useTheme } from '@mui/system';
import { List } from '@mui/material';

type Props = {
  book: Book;
};

export const BookBuyLinks = ({ book }: Props) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';
  const isRetina = window.devicePixelRatio > 1.1;
  return (
    <>
      <List
        className={style.buyLinksList}
        sx={{
          width: 'fit-content',
          padding: '0 5px',
        }}
      >
        {book.buy_links.map(link => {
          if (link.name === 'Amazon') {
            return (
              <li key={link.name} className={style.itemLink}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={
                      isDarkTheme
                        ? isRetina
                          ? amazonLight2x
                          : amazonLight
                        : isRetina
                        ? amazon2x
                        : amazon
                    }
                    alt="Amazon link"
                    className={style.amazon}
                  />
                </a>
              </li>
            );
          } else if (link.name === 'Apple Books') {
            return (
              <li key={link.name} className={style.itemLink}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={isRetina ? ibooks2x : ibooks}
                    alt="Apple Books link"
                    className={style.ibooks}
                  />
                </a>
              </li>
            );
          } else if (link.name === 'Bookshop') {
            return (
              <li key={link.name} className={style.itemLink}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={isRetina ? bookShop2x : bookShop}
                    alt="Bookshop link"
                    className={style.bookShop}
                  />
                </a>
              </li>
            );
          } else {
            return undefined;
          }
        })}
      </List>
    </>
  );
};
