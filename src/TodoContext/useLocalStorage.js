import React from "react";

function useLocalStorage(itemName,
  inicialValue) {
  const [item, setItem] = React.useState
    (inicialValue);
  const [loading, setloading] = React.useState
    (true);
  const [error, setError] = React.useState
    (false);

  React.useEffect(() => {
    try {
      const localStorageItem = localStorage
      .getItem(itemName);

      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(inicialValue));
        parsedItem = inicialValue;

      } else {
        parsedItem = JSON.parse
          (localStorageItem);
        setItem(parsedItem);
      }
      setloading(false);
    } catch (error) {
      setloading(false);
      setError(true);
    }
  }, [])


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

// const defaultTodos = [
//   {text: `cocinar`,  completed: true},
//   {text: `lavar`,  completed: false},
//   {text: `frEgar`,  completed: false},
//   {text: `dormir siesta`,  completed: true},
//   {text: `entrenar por la tarde`,  completed: false},
// ]

// localStorage.setItem(`TODOS_V1`, JSON.stringify(defaultTodos));


export { useLocalStorage }  
