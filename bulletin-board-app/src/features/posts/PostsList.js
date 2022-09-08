import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";



const PostsList = () => {
    const posts=useSelector(selectAllPosts);
    const postsStatus=useSelector(getPostsStatus);
    const error=useSelector(getPostsError);
    const dispatch = useDispatch();

    useEffect(() => {
      if(postsStatus == 'idle') {
        dispatch(fetchPosts())
      }
    }, [postsStatus, dispatch])
    

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post}/>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
};

export default PostsList