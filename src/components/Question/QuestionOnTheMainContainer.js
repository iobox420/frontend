import { connect } from 'react-redux'
import QuestionOnTheMainApiComponent from './QuestionOnTheMainApiComponent'
import mainPageReducerTest, {
  getPostsThunkCreator,
  updatePostsMainPageAC,
  updatePostsMainPageACTest,
} from '../../redux/mainPageReducer'

let mapStateToProps = (state) => {
  return {
    state: state,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: () => {
      dispatch(getPostsThunkCreator())
    },
    updateTestReducer: () => {
      dispatch(updatePostsMainPageACTest())
    },
  }
}

const QuestionOnTheMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionOnTheMainApiComponent)

export default QuestionOnTheMainContainer
