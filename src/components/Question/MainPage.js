import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from '../Header'
import SubHeader from '../ssubHeader'
import TextApi from '../TextApiComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import QuestionOnTheMainContainer from './QuestionOnTheMainContainer'
import QuestionSingleApiComponent from './QuestionSingleApiComponent'

const MainPage = (props) => {
  function RDM(min = 1, max = 10000) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
  }
  document.title = RDM(1, 1000)

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Header />
          <SubHeader />
          <div className="app-wrapper-content">
            <Route
              exact
              path="/questions/:genreId"
              render={() => <QuestionSingleApiComponent props={props} />}
            />
            <Route
              path="/all"
              render={() => (
                <QuestionOnTheMainContainer
                  props={props}
                  api={'api/questions/all/'}
                />
              )}
            />
            <Route
              path="/bestofday"
              render={() => <TextApi api={'api/questions/bestof1day/'} />}
            />
            <Route
              path="/bestofweek"
              render={() => <TextApi api={'api/questions/bestof7day/'} />}
            />
            <Route
              path="/bestofmonth"
              render={() => <TextApi api={'api/questions/bestofmonth/'} />}
            />
            <Route
              path="/bestofyear"
              render={() => <TextApi api={'api/questions/bestofyear/'} />}
            />
            {/*            <Route
              path="/redux"
              render={() => (
                <NativeQuestionApiComponent api={'api/questions/bestofyear/'} />
              )}
            />*/}
          </div>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default MainPage
