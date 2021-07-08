const SET_COMMENT_TEXT_BOX_STATE = 'SET-COMMENT-TEXT-BOX-STATE'

const addCommentTextBoxShowReducer = (state, action) => {
  switch (action.type) {
    case SET_COMMENT_TEXT_BOX_STATE: {
      debugger
      if (state) {
        return false
      } else return true
    }
    default: {
      return state
    }
  }
}

export default addCommentTextBoxShowReducer
