import React from "react";

function useLocalStorage(API, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  let savedItem = localStorage.getItem(API);
  let parsedItem;

  if(savedItem){
    parsedItem = JSON.parse(savedItem);
  } else {
    localStorage.setItem(API, JSON.stringify(initialValue));
    setItem(initialValue)
  }

  function saveItem(newItems) {
    setItem(newItems);
    localStorage.setItem(API, JSON.stringify(newItems));
  }

  return [parsedItem, saveItem];
}

export { useLocalStorage };