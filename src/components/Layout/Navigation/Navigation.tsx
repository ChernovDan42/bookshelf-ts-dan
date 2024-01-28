import { Pages } from 'constants/index';
import { CustomLink } from './CustomLink/CustomLink';

import { List, ListItem } from '@mui/material';

export const Navigation = () => {
  return (
    <List sx={{ display: 'flex', padding: 0 }}>
      <ListItem sx={{ width: 'auto', padding: 0 }}>
        <CustomLink page={Pages.HomePage}>Home</CustomLink>
      </ListItem>

      <ListItem sx={{ width: 'auto', padding: 0 }}>
        <CustomLink page={Pages.ShoppingListPage}>Shopping Page</CustomLink>
      </ListItem>
    </List>
  );
};
