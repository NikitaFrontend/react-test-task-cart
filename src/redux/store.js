//это просто редаксовое хранилище которое мы импортируем в index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // мы поместили наш слайс(это в данном примере counter, filter) в хранилище редакса(store), теперь мы можем импортировать
  // в любом другом файле экшены который мы экспортировали в слайсе и использовать их
});
