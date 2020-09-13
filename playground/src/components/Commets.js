import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewCommentForm from './NewCommentForm';

// stateless funct comp sfc
const Comments = () => {
  const [comments, setComments] = useState([
    { id: 1, parent: null, body: "Hey there", user: "johnd" },
    { id: 2, parent: 1, body: "Long reply message sdfsdf lalala", user: "johnd" },
    { id: 3, parent: null, body: "Haha", user: "johnd" },
    { id: 4, parent: 1, body: "1111", user: "johnd" },
    { id: 5, parent: 2, body: "2222", user: "johnd" }
  ])

  const addComment = (body) => {
    setComments([...comments, { id: uuidv4(), parent: null, body: body, user: "newComment" }])
  }

  useEffect(() => {
    console.log('effect', comments)
  }, [comments])

  return ( 
    <div class="comments">
      <ul>
        {comments.map(comment => {
          return <li key={comment.id}>{comment.body}</li>
        })}
      </ul>
      <NewCommentForm addComment={addComment} />
    </div> 
  );
}
 
export default Comments;