import styled from '@emotion/styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton, IconButtonProps } from '@mui/material';

import style from './DeleteButton.module.css';

const IconButtonDef = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  backgroundColor: 'var(--accent-color)',
  '&:hover': {
    backgroundColor: 'var(--accent-color)',
  },
}));

type Props = {
  id: string;
  handleDelete: (id: string) => void;
};

export const DeleteButton = ({ id, handleDelete }: Props) => {
  return (
    <IconButtonDef className={style.iconBtn} onClick={() => handleDelete(id)}>
      <DeleteForeverIcon
        className={style.iconDelete}
        style={{ fontSize: 16 }}
      />
    </IconButtonDef>
  );
};
