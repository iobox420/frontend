import { connect } from 'react-redux'
import { updatePostsMainPageAC } from '../../redux/mainPageReducer'
import MainPage from './MainPage'

let mapStateToProps = (state) => {
  return {
    state: state,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updatePosts1: (data) => {
      dispatch(updatePostsMainPageAC(data))
    },
  }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageContainer
