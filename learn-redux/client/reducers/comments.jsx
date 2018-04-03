const postComments = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
    case 'REMOVE_COMMENT':
      return [
        // pick the keys before 'i'
        ...state.slice(0, action.i),
        // pick the keys after 'i'
        ...state.slice(action.i + 10)
      ]
    default:
      return state
  }
}

const comments = (state = [], action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new onw
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

export default comments
