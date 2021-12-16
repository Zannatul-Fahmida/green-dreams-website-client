import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTrees = createAsyncThunk(
    '',
    async () =>{
        const response = await fetch()
        .then(res=> res.json())
        return response;
    }
)
const treeSlice = createSlice({
    name: 'tree',
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
            state.cartList = state.cartList.filter(tree => tree.id !== payload)
        },
    },
});
export const { addToCart, removeFromCart } = treeSlice.actions;
export default treeSlice.reducer;