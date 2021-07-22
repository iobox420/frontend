import { updatePostsMainPageAC } from '../../redux/mainPageReducer'

export const fetchCustomer = () => {
  return function (dispatch) {
    fetch('http://localhost:4000/api/questions/all/1')
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(updatePostsMainPageAC(result))
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {}
      )
  }
}
