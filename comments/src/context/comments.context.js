import React, { useState, createContext, useReducer, useEffect } from 'react';
import { commentsReducer } from '../reducers/CommentsReducer';

const defaultComments = [
  { id: 1, parent: null, body: "Hey there", user: "johnd" },
  { id: 2, parent: 1, body: "Long reply message sdfsdf lalala", user: "johnd" },
  { id: 3, parent: null, body: "Haha", user: "johnd" },
  { id: 4, parent: 1, body: "1111", user: "johnd" },
  { id: 5, parent: 2, body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", user: "johnd" },
  { id: 6, parent: 2, body: "2222", user: "johnd" },
  { id: 7, parent: 6, body: "333", user: "johnd" },
  { id: 8, parent: 7, body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", user: "johnd" }
]

export const CommentsContext = createContext()

const CommentsContextProvider = (props) => {
  // 2nd arg is the default value 
  // 3rd arg is the default value ignoring the 2nd arg
  const [comments, dispatch] = useReducer(commentsReducer, defaultComments, () => {
    const localComments = localStorage.getItem('comments')
    return localComments ? JSON.parse(localComments) : defaultComments
  })

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))


  }, [comments])

  return (
    <CommentsContext.Provider value={{ comments, dispatch }}>
      {props.children}
    </CommentsContext.Provider>
  )

}

export default CommentsContextProvider;