import React from 'react'

import store from '../redux/redux-store'
import NativeText from './NativeText'
import { makeStyles } from '@material-ui/core/styles'
/*import config from '../config'*/

const { useState } = require('react')
const { useEffect } = require('react')

const useStyles = makeStyles({
  mainWrapper: {
    margin: '20px 0 0 0',
  },
})

function NativeTextApi(props) {
  const c = useStyles()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  /* let uri = config.baseURL + props.api + '1'
  console.log(uri)*/
  useEffect(() => {
    /*let uri = config.baseURL + props.api + '1'
    console.log(uri)*/

    //Вызов fetch  с параметром  let uri = config.baseURL + props.api + '1'
    //приводит к зацикливанию fetch, поэтому захардкодим это место
    /*fetch(uri)*/
    fetch('http://localhost:4000/api/questions/all/1')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          store.dispatch({ type: 'UPDATE-POSTS', data: result })
          setItems(store.getState().mainPage.posts)
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
    /* console.log(store.getState())*/
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className={c.mainWrapper}>
        {items.map((currentPost, index, arr) => {
          return <NativeText key={index} props={currentPost} />
        })}
      </div>
    )
  }
}

export default NativeTextApi
