import { Pages } from 'constants/index';
import { CustomLink } from './CustomLink/CustomLink';

import { List, ListItem } from '@mui/material';

export const Navigation = () => {
  return (
    <List sx={{ display: 'flex' }}>
      <ListItem sx={{ width: 'auto' }}>
        <CustomLink page={Pages.HomePage}>Home</CustomLink>
      </ListItem>

      <ListItem sx={{ width: 'auto' }}>
        <CustomLink page={Pages.ShoppingListPage}>Shopping Page</CustomLink>
      </ListItem>
    </List>
  );
};
