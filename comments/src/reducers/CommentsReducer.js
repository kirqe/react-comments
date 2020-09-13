import { v4 as uuidv4 } from 'uuid';

export const commentsReducer = (state, action) => {
  const items = ["John", "Johnathan", "Johndean", "Johnjay", "John-Michael", "Johnnie", "Johnny", "Johnpaul", "John-Scott", "Johnson", "Jole", "Jomuel", "Jon", "Jonah", "Jonatan", "Jonathan", "Jonathon", 
  "Jonny", "Jonothan", "Jon-Paul", "Jonson", "Joojo", "Jordan", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", 
  "Joris", "Jorryn", "Josan", "Josef"]
  let username = items[Math.floor(Math.random() * items.length)]

  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        id: uuidv4(),
        parent: action.comment.parent,
        body: action.comment.body,
        user: username
      }]

  }
}
