import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = [
    {id:'0', name:'Dude Lebowski'},
    {id:'1', name:'Bunny Lebowski'},
    {id:'2', name:'The other Jeffrey Lebowski'},
]

const usersSlice=createSlice({
    name: 'users',
    initialState,
    reducers:{}
});

export const selectAllUsers=(state)=> state.users;
export default usersSlice.reducer;