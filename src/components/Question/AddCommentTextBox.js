import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import store from '../../redux/redux-store'

const useStyles = makeStyles({
  textBoxWrapper: {},
  form: {},
})

export default function AddCommentTextBox(props) {
  const c = useStyles()
  const onChangeF = (e) => {
    let text = e.target.value
    store.dispatch({
      type: 'CHANGE-TEXT-FIELD-COMMENT-SINGLE-QUESTION',
      data: text,
    })
    console.log(store.getState().textFieldCommentSingleQuestion)
  }
  const onClickF = () => {
    store.dispatch({ type: 'SEND-TEXT-FIELD-COMMENT-SINGLE-QUESTION' })
    console.log(store.getState().textFieldCommentSingleQuestion)
  }
  debugger
  return (
    <div className={c.textBoxWrapper}>
      <form className={c.form} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={onChangeF}
          onClick={onClickF}
        />
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </form>
    </div>
  )
}
