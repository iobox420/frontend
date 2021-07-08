import React /*, { useState }*/, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NativeAvatar from './NativeAvatar'
import store from '../redux/store'

const useStyles = makeStyles({
  wrapper: {
    fontSize: '12px',
    fontWeight: '600',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    padding: '25px 10px 25px 10px',
    background: '#eeeeee',
    borderRadius: '7px',
    margin: '10px 0 10px 0',
  },
  avatarBlock: {
    margin: '0 15px 0 10px',
  },
  blockAddReply: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textField: {
    flexGrow: 1,
    background: 'white',
  },
  button: {
    margin: '0px 7px 0 15px',
    height: '3.8em',
  },
})

export default function NativeReply(props) {
  const c = useStyles()

  const toQuestion = (props) => {
    console.log(props)
  }
  let test = store.getaddCommentTextBoxShow()

  return (
    <div className={c.wrapper}>
      <div>
        <button
          onClick={() => {
            debugger
            store.dispatch({ type: 'SET-COMMENT-TEXT-BOX-STATE' })
            test = store.getaddCommentTextBoxShow()
            console.log(test)
          }}
        >
          toggle
        </button>
        <div>{test}</div>
        {/*{test ? null : <div>This is visible</div>}*/}
      </div>
      {/*      <div>
        <button
          onClick={() => {
            let curState
            if (count) {
              curState = false
            } else {
              curState = true
            }
            SetCount(curState)
          }}
        >
          toggle
        </button>
        {count ? <div>This is visible</div> : null}
      </div>*/}

      <form className={c.blockAddReply}>
        <div className={c.avatarBlock}>
          <NativeAvatar />
        </div>
        <TextField
          className={c.textField}
          id="outlined-basic"
          label="Ваш ответ"
          variant="outlined"
        />
        <Button className={c.button} variant="contained" color="primary">
          Добавить
        </Button>
      </form>
    </div>
  )
}
