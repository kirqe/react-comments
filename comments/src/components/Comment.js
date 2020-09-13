import React from 'react';
import ReplyForm from './ReplyForm';
import Comments from './Comments'
import { CommentsContext } from '../context/comments.context';

const Comment = (props) => {
  return ( 
    <div key={props.comment.id} className="comment" style={{ marginLeft: 30 + "px" }}>
      <span className="comment-user">
        <b>{props.comment.user}</b>
      </span>

      <span className="comment-body">{props.comment.body}</span>

      <ReplyForm replyTo={props.comment.id}/>
      <Comments comments={props.replies} parent={props.comment.id} />
    </div>
   );
}
 
export default Comment;

