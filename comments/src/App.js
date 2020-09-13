import React, { useContext } from 'react';
import './App.css';
import Comments from './components/Comments';
import ReplyForm from './components/ReplyForm';

import { CommentsContext } from './context/comments.context';
import CommentsContextProvider from './context/comments.context';

const App = () => {

  return (
    <div className="container">
      <CommentsContextProvider>

        <CommentsContext.Consumer>
          {({ comments}) => (
            <div>
              <ReplyForm replyTo={null} buttonText="New Comment"/>
              <Comments comments={comments} parent={null} />
            </div>
            
          )}
        </CommentsContext.Consumer>

      </CommentsContextProvider>
    </div>
  );
}

export default App;
