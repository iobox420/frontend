const CHANGE_TEXT_FIELD_COMMENT_SINGLE_QUESTION =
  'CHANGE-TEXT-FIELD-COMMENT-SINGLE-QUESTION'
const SEND_TEXT_FIELD_COMMENT_SINGLE_QUESTION =
  'SEND-TEXT-FIELD-COMMENT-SINGLE-QUESTION'

const textFieldCommentSingleQuestionReducer = (state, action) => {
  let initialState = {
    textFieldCommentSingleQuestion: '',
    singleQuestionComments: [],
  }
  switch (action.type) {
    case CHANGE_TEXT_FIELD_COMMENT_SINGLE_QUESTION: {
      return {
        ...state,
        textFieldCommentSingleQuestion: action.data,
      }
    }
    case SEND_TEXT_FIELD_COMMENT_SINGLE_QUESTION: {
      return {
        ...state,
        singleQuestionComments: state.textFieldCommentSingleQuestion,
      }
    }

    default: {
      return initialState
    }
  }
}

export default textFieldCommentSingleQuestionReducer
