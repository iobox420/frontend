import mainPageReducer from './mainPageReducer'
import questionPageReducer from './questionPageReducer'
import tokenReducer from './tokenReducer'
import addCommentTextBoxShowReducer from './addCommentTextBoxShowReducer'
import { combineReducers, createStore } from 'redux'

let reducers = combineReducers({
  mainPage: mainPageReducer,
  questionPage: questionPageReducer,
  token: tokenReducer,
  questionPage_addCommentTextBoxShow: addCommentTextBoxShowReducer,
})

let store = createStore(reducers)

window.store = store
export default store
