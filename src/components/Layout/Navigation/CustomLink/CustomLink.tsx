import { NavLink } from 'react-router-dom';
import { Pages } from 'constants/index';
import { Link } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

type Props = {
  children: string;
  page: string;
};

const linkSX = {
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  letterSpacing: '-0.56px',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  transition: 'transform 0.3s ease-in-out',
};

export const CustomLink = ({ children, page }: Props) => {
  return (
    <Link
      component={NavLink}
      to={page}
      color={'text.primary'}
      sx={linkSX}
      underline="none"
    >
      {children}
      {page === Pages.ShoppingListPage && (
        <ShoppingBagIcon style={{ fontSize: 20, marginLeft: '4px' }} />
      )}
    </Link>
  );
};
