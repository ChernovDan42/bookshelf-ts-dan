import { Link } from 'react-router-dom';
import { Link as MuiLink, Typography } from '@mui/material';

import style from './SeeMoreBtn.module.css';
import { scrollToTop } from 'ts/scrollToTop';

type Prop = {
  page: string;
};

export const SeeMoreBtn = ({ page }: Prop) => {
  return (
    <MuiLink
      component={Link}
      to={`/${page}`}
      className={style.seeMore}
      sx={{ marginLeft: 'auto', color: 'text.primary' }}
      onClick={scrollToTop}
      underline="none"
    >
      <Typography variant="button">See more</Typography>
    </MuiLink>
  );
};
