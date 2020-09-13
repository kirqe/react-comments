import React, { useState } from 'react';

const NewCommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('')
  }

  return ( 
    <form className="w-50 mb-1" onSubmit={handleSubmit}>
      <div className="form-group mb-1">
        <textarea className="form-control"
          rows="3"
          placeholder="comment text" 
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary btn-sm">Submit</button>
    </form>
   );
}
 
export default NewCommentForm;