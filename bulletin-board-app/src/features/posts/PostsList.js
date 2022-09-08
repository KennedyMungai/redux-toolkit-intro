import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";



const PostsList = () => {
    const posts=useSelector(selectAllPosts);
    const postsStatus=useSelector(getPostsStatus);
    const error=useSelector(getPostsError);
    const dispatch = useDispatch();

    useEffect(() => {
      if(postsStatus === 'idle') {
        dispatch(fetchPosts())
      }
    }, [postsStatus, dispatch])
    

    const renderedPosts = posts.map(post => (
        
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
};

export default PostsList