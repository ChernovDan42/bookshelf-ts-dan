import { List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import { CustomLink } from 'components/Layout/Navigation/CustomLink/CustomLink';
import { Pages } from 'constants/index';
import bgImage from '../../images/modalBgImg.png';
import style from './MobileModalNav.module.css';

const imageStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: 'transparent',
  width: '100%',
  height: '350px',
  position: 'absolute',
  zIndex: '2',
  bottom: -70,
};

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const MobileModalNav = ({ isOpen, toggle }: Props) => {
  return (
    <Box className={clsx(style.overlay, isOpen && style.isOpen)}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '247px',
        }}
      >
        <List>
          <ListItem onClick={toggle}>
            <CustomLink page={Pages.HomePage}>Home</CustomLink>
          </ListItem>

          <ListItem onClick={toggle}>
            <CustomLink page={Pages.ShoppingListPage}>Shopping Page</CustomLink>
          </ListItem>
        </List>
      </Box>
      <Box sx={imageStyle}></Box>
    </Box>
  );
};
