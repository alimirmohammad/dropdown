import { KeyboardEventHandler, useCallback, useState } from 'react';
import { createUseStyles } from 'react-jss';

import Input from './Input';
import List from './List';

import useOutsideClick from '../hooks/useOutsideClick';

type DropdownProps = {
  items: string[];
  value: string;
  onChange: (value: string) => void;
  input: string;
  onInput: (value: string) => void;
  onAdd: () => void;
};

export default function Dropdown({
  items,
  onChange,
  value,
  input,
  onInput,
  onAdd,
}: DropdownProps) {
  const classes = useStyles();
  const [showList, setShowList] = useState(false);

  const hideList = useCallback(() => setShowList(false), []);

  const ref = useOutsideClick(hideList);

  const handleAdd = () => {
    onAdd();
    hideList();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key !== 'Enter') return;
    handleAdd();
  };

  const handleSelect = (value: string) => {
    onChange(value);
    hideList();
  };

  return (
    <div className={classes.container} ref={ref}>
      <Input
        onFocus={() => setShowList(true)}
        onClick={() => setShowList(true)}
        focus={showList}
        value={input}
        onChange={e => onInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {showList && (
        <List
          items={items}
          onSelect={handleSelect}
          value={value}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 350,
    margin: 'auto',
  },
});
