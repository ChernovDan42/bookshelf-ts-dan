import { Link, ListItem, useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

type Props = {
  page: string;
  children: string;
};

export const AsideLink = ({ page, children }: Props) => {
  const theme = useTheme();

  const isMdScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const asideLinkStyles = {
    fontSize: isLgScreen ? '18px' : isMdScreen ? '13px' : '16px',
    fontWeight: '400',
    lineHeight: '18px',
    letterSpacing: '-0.32px',
  };

  return (
    <ListItem className="category-link">
      <Link
        sx={asideLinkStyles}
        component={NavLink}
        to={page}
        color="text.secondary"
        className={clsx(
          theme.palette.mode === 'light'
            ? 'category-link-light'
            : 'category-link-dark'
        )}
        underline="none"
      >
        {children}
      </Link>
    </ListItem>
  );
};
