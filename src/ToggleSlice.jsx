/*implemented by Developer Puccetti Nicola
* version 1.0.0 
* this component use reduxjs/toolkit and your createSlice
* for build and manage toggle for button by value true or false
* it contains a value of reference for other components
* if used it always has to be imported in store component
* end its reducer into respective components that use it 
*/
import {createSlice} from '@reduxjs/toolkit';

const initialState={
    addedToCart: {},
}

export const ToggleSlice= createSlice({
    name: 'ToggleBtnCart',
    initialState,
    reducers:{
        togAddedToCart: (state,action)=>{
            const added = state.addedToCart[action.payload.name];
                if(added===undefined || !added){
                    state.addedToCart={...state.addedToCart,[action.payload.name]:true};
                }
        },
        togRemovedFromCart:(state,action)=>{
            const removed = state.addedToCart[action.payload.name];
            if(removed){
                state.addedToCart={...state.addedToCart,[action.payload.name]:false};
            }
        }
    }
})
export const {togAddedToCart,togRemovedFromCart}=ToggleSlice.actions;
export const toggleBtnReducer = ToggleSlice.reducer;