import { useEffect, useMemo, useState } from 'react';

export default function useDropdown(initialItems: string[], isSearch = false) {
  const [value, setValue] = useState('');
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState('');

  const shownItems = useMemo(
    () =>
      isSearch
        ? items.filter(item => item.toLowerCase().includes(query.toLowerCase()))
        : items,
    [isSearch, items, query]
  );

  const handleAddItem = () => {
    if (!query) return;
    const match = shownItems.find(
      item => item.toLowerCase() === query.toLowerCase()
    );
    if (!match) {
      setItems(prev => [query, ...prev]);
      setValue(query);
    } else {
      setValue(match);
    }
  };

  useEffect(() => {
    setQuery(value);
  }, [value]);

  return {
    shownItems,
    handleAddItem,
    value,
    setValue,
    query,
    setQuery,
  };
}
