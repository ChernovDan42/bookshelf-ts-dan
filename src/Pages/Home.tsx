import { Typography } from '@mui/material';
import { TopBooksList } from 'components/TopBooksList/TopBooksList';

const Home = () => {
  return (
    <>
      <Typography variant="h2">
        Best Sellers <span className="accent-span">Books</span>
      </Typography>
      <TopBooksList />
    </>
  );
};

export default Home;
