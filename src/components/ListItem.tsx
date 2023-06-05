import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { grayLighter, primary, primaryLight } from '../utils/style';

import check from '../assets/check.svg';

type ListItemProps = {
  children: ReactNode;
  onClick: () => void;
  isSelected?: boolean;
};

export default function ListItem({
  children,
  onClick,
  isSelected,
}: ListItemProps) {
  const classes = useStyles();
  const listItemClass = [
    classes.listItem,
    isSelected ? classes.selected : '',
  ].join(' ');

  return (
    <li className={listItemClass} onClick={onClick}>
      <span className={classes.text}>{children}</span>
      {isSelected && <img src={check} className={classes.icon} />}
    </li>
  );
}

const useStyles = createUseStyles({
  listItem: {
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: grayLighter,
    },
  },
  text: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  selected: {
    backgroundColor: primaryLight,
    color: primary,
    fontWeight: 500,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
