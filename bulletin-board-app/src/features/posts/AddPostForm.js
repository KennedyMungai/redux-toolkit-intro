import React, {useState} from 'react'



const AddPostForm = () => {
  return (
    <section>
        <h2>Add a new post</h2>
        <form>
            <label htmlFor='postTitle'>Post Title</label>
            <input 
                type='text' 
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChanged}
                />

            <label htmlFor='postAuthor'>Author:</label>
            <select id='postAuthor' value={userId} onChange={onAuthorChanged}>
                <option value=''></option>
                {usersOptions}
            </select>

            <label htmlFor='postContent'>Content:</label>
            <textarea 
                id='postContent'
                name='postContent'
                value={content}
                onChange={onContentChanged}
            />

            <button
                type='button'
                onClick={onSavePostClicked}
                disabled={!canSave}
                >Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm