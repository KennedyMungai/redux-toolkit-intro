import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id:'1', title: 'Learning Redux Toolkit', content: 'I have heard some good things about this course'},
    {id:'2', title: 'Slices ....', content: 'I still have no idea what this imported library does, but I have time'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        }
    }
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded} =  postsSlice.actions
export default postsSlice.reducer;