import { configureStore } from '@reduxjs/toolkit';
import {cartReducer} from './CartSlice';
import {toggleBtnReducer} from './ToggleSlice'
 const store = configureStore({
    reducer: {
        cart: cartReducer,
        toggleBtnCart: toggleBtnReducer,
    },
});
export default store
