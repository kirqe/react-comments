import React, { useContext }from 'react';
import Comment from './Comment'

import { CommentsContext } from '../context/comments.context';

const Comments = (props) => {
  const { comments } = useContext(CommentsContext)

  return comments.length ? (
    <div className="comments-list">
      {comments.map(comment => (
        (comment.parent === props.parent) ?
          <Comment key={comment.id} comment={comment} replies={comments} />
          : null
      ))}
    </div>
  ) : (
    <div className="empty">No comments</div>
  )
}

export default Comments

