import { createSlice } from "@reduxjs/toolkit";


const initalState = {
    requests:null
}
const requestSlice = createSlice({
    name:'requests',
    initialState:initalState,
    reducers:{
        addRequest:(state,action) => {
            state.requests = action.payload;
        }
    }
})


export const {addRequest} = requestSlice.actions;

export default requestSlice.reducer;