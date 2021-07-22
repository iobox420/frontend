import mainPageReducer from './mainPageReducer'
import questionPageReducer from './questionPageReducer'
import tokenReducer from './tokenReducer'
import addCommentTextBoxShowReducer from './addCommentTextBoxShowReducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import textFieldCommentSingleQuestionReducer from './textFieldCommentSingleQuestionReducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
  mainPage: mainPageReducer,
  questionPage: questionPageReducer,
  textFieldCommentSingleQuestion: textFieldCommentSingleQuestionReducer,
  token: tokenReducer,
  questionPage_addCommentTextBoxShow: addCommentTextBoxShowReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store
