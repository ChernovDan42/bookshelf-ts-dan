import { Box, useMediaQuery, useTheme } from '@mui/material';

const ShoppingPage = () => {
  const theme = useTheme();
  const isXlScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ display: 'flex' }}>
      <h1>Shopping Page</h1>
    </Box>
  );
};

export default ShoppingPage;
