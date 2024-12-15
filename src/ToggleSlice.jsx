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