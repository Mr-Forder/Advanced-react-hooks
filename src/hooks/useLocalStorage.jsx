import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  //state variable - default is a function call
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );
  const setValue = (value) => {
    //check to see if our value is a function or not
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    //set to state value
    setLocalStorageValue(value);
    //finally, set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

//our getLocalStorageValue, called as default state for localStorageValue
function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  //returns - if there is an item in storage, returns the item, if not, returns initial (default) value
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
