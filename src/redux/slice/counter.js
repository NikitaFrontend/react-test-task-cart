//слайс приносит уносит меняет добавляет что-либо
// допустим может быть слайс фильтрации, слайс пицц и прочее
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: 0,
  count: 1,
}; //начальное состояние, все равно что написать useState(0)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setItemInCart: (state, action) => {
      state.price = action.payload;
    },
    increment: (state, action) => {
      state.price += action.payload;
    },
    /*state это все равно что первая переменная состояния в хуке useState*/
  },
});

//мы вытаскиваем все экшены с помощью деструктуризации и сразу их экспортируем,
//точно также как и в useState происходит, только в useState мы сначало делаем деструтуризацию,
//а потом работаем с этими переменными, а тут мы сначал работаем с логикой переменных, деструтуризируем их,
//экспортируем, а потом уже вставляет куда нам нужно в проекте
export const { setItemInCart, increment } =
  counterSlice.actions; /* тоже самое что и counterSlice.reducers */

export default counterSlice.reducer; //по умолчанию пишем чтобы потом импортировать в файл store.js
