import { createUseStyles } from 'react-jss';

import Dropdown from './components/Dropdown';
import useDropdown from './hooks/useDropdown';

import initialItems from './data/items.json';

export default function App() {
  const classes = useStyles();
  const { shownItems, value, setValue, query, setQuery, handleAddItem } =
    useDropdown(initialItems);

  return (
    <div className={classes.container}>
      <Dropdown
        items={shownItems}
        value={value}
        onChange={setValue}
        input={query}
        onInput={setQuery}
        onAdd={handleAddItem}
      />
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    paddingTop: 100,
  },
});
