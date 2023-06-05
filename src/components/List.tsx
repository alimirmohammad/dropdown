import { createUseStyles } from 'react-jss';

import ListItem from './ListItem';

import { gray, grayLight } from '../utils/style';

type ListProps = {
  items: string[];
  onSelect: (value: string) => void;
  value: string;
  onAdd: () => void;
};

export default function List({ items, onSelect, value, onAdd }: ListProps) {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {items.length > 0 ? (
        items.map(item => (
          <ListItem
            key={item}
            onClick={() => onSelect(item)}
            isSelected={item === value}
          >
            {item}
          </ListItem>
        ))
      ) : (
        <ListItem onClick={onAdd}>Add as a new item</ListItem>
      )}
    </ul>
  );
}

const useStyles = createUseStyles({
  list: {
    padding: '1rem 0.5rem',
    color: gray,
    fontSize: 16,
    fontWeight: 400,
    backgroundColor: 'white',
    borderRadius: 12,
    border: `1px solid ${grayLight}`,
    maxHeight: 300,
    overflowY: 'auto',
  },
});
