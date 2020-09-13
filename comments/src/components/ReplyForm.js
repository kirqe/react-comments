import React, { useState, useContext } from 'react';
import { CommentsContext } from '../context/comments.context';

const ReplyForm = (props) => {
  // const { addComment } = useContext(CommentsContext)
  const { dispatch } = useContext(CommentsContext)
  const [body, setBody] = useState("")
  const [isReplying, setIsReplying] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ 
      type: 'ADD_COMMENT', 
      comment: { parent: props.replyTo, body: body }
    })

    setIsReplying(false)
  }


  if (isReplying) {
    return (
      <div>
        <span className="comment-footer-item"><a href="#" onClick={(e) => { setIsReplying(!isReplying) }}>{props.buttonText || "Reply"}</a></span>
        <form className="w-50 mb-1" onSubmit={handleSubmit} >

          <div className="form-group mb-1">
            <textarea className="form-control"
              rows="3"
              placeholder="comment text" value={body} onChange={(e) => { setBody(e.target.value)}}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-sm">Submit</button>

        </form>
      </div>
    )
  } else {
    return <span className="comment-footer-item"><a href="#" onClick={(e) => { setIsReplying(!isReplying) }}>{props.buttonText || "Reply"}</a></span>
  }
  
}
 
export default ReplyForm;

