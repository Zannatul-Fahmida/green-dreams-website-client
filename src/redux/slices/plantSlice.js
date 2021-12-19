import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPlants = createAsyncThunk(
    '',
    async () =>{
        const response = await fetch()
        .then(res=> res.json())
        return response;
    }
)
const plantSlice = createSlice({
    name: 'plant',
    initialState: {
        discover: [],
        cartList: [],
        orderedList: []
    },
    reducers: {
        addToCart: (state, { payload }) => {
            state.cartList.push(payload);
        },
        removeFromCart: (state, { payload }) => {
            state.cartList = state.cartList.filter(plant => plant.id !== payload)
        },
    },
});
export const { addToCart, removeFromCart } = plantSlice.actions;
export default plantSlice.reducer;