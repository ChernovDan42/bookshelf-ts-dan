import { Book } from "Types";

export const saveToLocalStorage = (key:string, data:object) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Отримання масиву з localStorage
 export const loadFromLocalStorage = (key:string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Додавання об'єкта до масиву в localStorage
export const addObjectToLocalArray = (key:string, object:object) => {
  const existingData = loadFromLocalStorage(key);
  const newData = [...existingData, object];
  saveToLocalStorage(key, newData);
  return newData
};

// Видалення об'єкта з масиву в localStorage за індексом
export const removeObjectFromLocalArray = (key:string, object:Book) => {
  const existingData = loadFromLocalStorage(key);
  const newData = existingData.filter((book:Book) => book._id !== object._id);
  saveToLocalStorage(key, newData);
  return newData
};