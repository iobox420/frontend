import store from './redux-store'
debugger
const UPDATE_POSTS = 'UPDATE-POSTS'

let initialState = {
  posts: [
    {
      heading: 'reducer store',
      questions_text:
        'gElNAEzLcfJMKKVXqlET2Z1McgkoHSe71J2tfk1jEBFbEMoA1iYcHxKKi8VuEyTIp8Q9zKBZEy3b8nE0qP89TCqwWqVu7lohhR9v',
      date_create: '2020-04-28T21:00:00.000Z',
      id: 134,
      user_name: 'gpiacXEC',
      name: '9sfjjhXz',
      second_name: 'CcTxw7Wp',
      avatar_url:
        'https://gravatar.com/avatar/eed3bf7d5f820db6dee44dfdf7e27bd7?s=400&d=robohash&r=x',
      question_post_likes_count: 41,
      rows_count: 4000,
      reply_text:
        'KYPFlcPsIxVjnbijdjdW71bG1w53Shn74oC3Z2Mbqis0eoUYPOa4B3G26TC1QJhsc0DI6TwEKWZfnSvy9WE7ahPioYsTt5ZfOglr',
      reply_date_create: '2020-04-23T21:00:00.000Z',
      reply_user_name: 'gpiacXEC',
      reply_name: '9sfjjhXz',
      reply_second_name: 'CcTxw7Wp',
      reply_avatar_url:
        'https://gravatar.com/avatar/eed3bf7d5f820db6dee44dfdf7e27bd7?s=400&d=robohash&r=x',
      reply_likes_count: 9,
    },
  ],
}

const mainPageReducer = (action, state = initialState) => {
  debugger
  console.log('main reducer')
  switch (action.type) {
    case UPDATE_POSTS:
      console.log('reducer')
      return {
        ...state,
        posts: action.data,
      }
    default:
      return state
      debugger
  }
}

/*
const mainPageReducerTest = (state = initialState, action) => {
  debugger
  console.log('main test reducer')
  switch (action.type) {
    case UPDATE_POSTS:
      console.log('reducer text')
      return {
        ...state,
        posts: [
          {
            heading: 'TEST',
            questions_text:
              'gElNAEzLcfJMKKVXqlET2Z1McgkoHSe71J2tfk1jEBFbEMoA1iYcHxKKi8VuEyTIp8Q9zKBZEy3b8nE0qP89TCqwWqVu7lohhR9v',
            date_create: '2020-04-28T21:00:00.000Z',
            id: 134,
            user_name: 'gpiacXEC',
            name: '9sfjjhXz',
            second_name: 'CcTxw7Wp',
            avatar_url:
              'https://gravatar.com/avatar/eed3bf7d5f820db6dee44dfdf7e27bd7?s=400&d=robohash&r=x',
            question_post_likes_count: 41,
            rows_count: 4000,
            reply_text:
              'KYPFlcPsIxVjnbijdjdW71bG1w53Shn74oC3Z2Mbqis0eoUYPOa4B3G26TC1QJhsc0DI6TwEKWZfnSvy9WE7ahPioYsTt5ZfOglr',
            reply_date_create: '2020-04-23T21:00:00.000Z',
            reply_user_name: 'gpiacXEC',
            reply_name: '9sfjjhXz',
            reply_second_name: 'CcTxw7Wp',
            reply_avatar_url:
              'https://gravatar.com/avatar/eed3bf7d5f820db6dee44dfdf7e27bd7?s=400&d=robohash&r=x',
            reply_likes_count: 9,
          },
        ],
      }
    default:
      return state
    /!*debugger*!/
  }
}
*/

export const updatePostsMainPageAC = (data) => ({
  type: UPDATE_POSTS,
  data: data,
})

export const updatePostsMainPageACTest = () => {
  console.log('action')
  return {
    type: UPDATE_POSTS,
    data: null,
  }
}

export default mainPageReducer
/*export default mainPageReducerTest*/
export const getPostsThunkCreator = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/api/questions/all/1')
      .then((res) => res.json())
      .then(
        (result) => {
          debugger
          /*dispatch(updatePostsMainPageAC(result))*/
          store.dispatch({ type: 'UPDATE-POSTS', data: result })

          /*dispatch(setIsLoaded(true))*/
          /*console.log('fetch completed')
          debugger
          console.log(store.getState())*/

          /*dispatch(
            {
              type: 'UPDATE-POSTS',
              data: result,
            }
          )*/
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          /*setIsLoaded(true)
                         setError(error)*/
        }
      )
  }
}
