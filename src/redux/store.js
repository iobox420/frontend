import mainPageReducer from './mainPageReducer'
import tokenReducer from './tokenReducer'
import questionPageReducer from './questionPageReducer'
import addCommentTextBoxShowReducer from './addCommentTextBoxShowReducer'

let store = {
  _state: {
    mainPage: {},
    questionPage: {
      addCommentTextBoxShow: false,
    },
    token: {
      isAuth: null,
      user: null,
      avatarUrl: null,
      token: null,
    },
  },
  _callSubscriber() {
    console.log('state was changed')
  },
  getState() {
    return this._state
  },
  getPosts() {
    return this._state.mainPage.posts
  },
  getaddCommentTextBoxShow() {
    return this._state.questionPage.addCommentTextBoxShow
  },
  getCurrentQuestion() {
    return this._state.questionPage
  },
  getToken() {
    return 'Bearer ' + this._state.token
  },
  getIsAuth() {
    return this._state.token.isAuth
  },
  getAvatarUrl() {
    return this._state.token.avatarUrl
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  // prettier-ignore
  dispatch(action) {
    this._state.mainPage = mainPageReducer(this._state.mainPage, action)
    this._state.questionPage = questionPageReducer(this._state.questionPage,action)
    this._state.token = tokenReducer(this._state.token, action)
    this._state.questionPage.addCommentTextBoxShow = addCommentTextBoxShowReducer(this._state.questionPage.addCommentTextBoxShow, action)
    this._callSubscriber(this._state)
  },
}

export default store
