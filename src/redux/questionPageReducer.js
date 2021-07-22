const UPDATE_CURRENT_POST = 'UPDATE-CURRENT-POST'

let initialState = {
  post: [],
  reply: [],
}

const questionPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_POST:
      return {
        ...state,
        post: action.data.post,
        reply: action.data.reply,
      }
    default:
      return state
    /*debugger*/
  }
}

export const updateQuestionPage = (data) => ({
  type: UPDATE_CURRENT_POST,
  data: data,
})

export const getQuestionThunk = (dispatch) => {
  dispatch()
}

export default questionPageReducer
