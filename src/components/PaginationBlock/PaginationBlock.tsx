import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { scrollToTop } from 'ts/scrollToTop';

import style from './PaginationBlock.module.css';

import { useMediaQuery, useTheme } from '@mui/material';

type Props = {
  setPage: (value: number) => void;
  totalPages: number;
  currentPage: number;
};

export const PaginationBlock = ({
  setPage,
  totalPages,
  currentPage,
}: Props) => {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down(376));

  return (
    <div className={style.paginationWrap}>
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(e, value) => setPage(value)}
          boundaryCount={0}
          siblingCount={isSmScreen ? 0 : 1}
          showFirstButton
          showLastButton
          variant="outlined"
          color="secondary"
          onClick={scrollToTop}
          size="medium"
        />
      </Stack>
    </div>
  );
};
