import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';


const initialState = [
    {
        id:'1', 
        title: 'Learning Redux Toolkit', 
        content: 'I have heard some good things about this course',
        date: sub(new Date(), {minutes: 10}).toISOString,
        reactions: {
            thumbsUp:0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee:0
        }
    },
    {
        id:'2', 
        title: 'Slices ....', 
        content: 'I still have no idea what this imported library does, but I have time',
        date: sub(new Date(), {minutes: 5}).toISOString,
        reactions: {
            thumbsUp:0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee:0
        }
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId
                    }
                }
            }
        },


    }
});

export const selectAllPosts = (state) => state.posts;
export const {postAdded} =  postsSlice.actions;
export default postsSlice.reducer;