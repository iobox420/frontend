import React /*, { useState }*/ from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
/*import Like from '../img/like.svg'*/
import FavoriteIcon from '@material-ui/icons/Favorite'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    borderRadius: '0px',
    /*padding: '0px 16px 0px 16px',*/
    margin: '0px 0px 10px 0px',
    boxShadow:
      '4px 4px 10px -1px rgb(0 0 0 / 20%), -7px 4px 9px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  replyTopBlock: {
    padding: '16px 16px 0px 16px',
  },
  question: {
    padding: '16px 16px 0px 0px',
  },
  buttonBlock: {
    padding: '0px 10px 0px 24px',
  },
  card: {
    background: 'white',
    padding: '0px 16px 0px 16px',
  },
  media: {
    height: 140,
  },
  avatarReplyBlock: {
    /*background: 'gray',*/
    display: 'flex',
    padding: '0px 16px 10px 20px',
  },
  avatarBlock: {
    /*background: 'gray',*/
    padding: '0px 0 14px 0px;',
    display: 'flex',
  },
  small: {
    width: '30px',
    height: '30px',
    margin: '0 10px 0 10px',
  },
  replyAvatar: {
    margin: '0 10px 0 10px',
    lineHeight: '42px',
  },
  replyAsk: {
    lineHeight: '30px',
    color: 'color: #7f7f7f',
  },
  replyAskName: {
    lineHeight: '30px',
  },
  replyText: {
    padding: '0 16px 0 4px',
  },
  likeArea: {
    display: 'flex',
  },
})

export default function Reply(props) {
  /*console.log(props)*/
  const c = useStyles()
  /* const [count, setCount] = useState(0)*/
  const toPost = (props) => {
    debugger
  }
  debugger
  return (
    <Card className={c.root} /*onClick={toPost(props)}*/>
      <CardActionArea>
        <CardContent className={c.likeArea}>
          <FavoriteIcon />

          {/*likes count*/}
          <Typography variant="h6" gutterBottom className={c.replyAsk}>
            {/*{props.props.question_post_likes_count}*/}
          </Typography>
          {/*<div>{count}</div>*/}

          {/*like button*/}
          {/*<button onClick={() => setCount(count + 1)}></button>*/}
        </CardContent>
      </CardActionArea>
      <CardActionArea className={c.card}>
        {' '}
        <CardContent>
          <CardContent className={c.avatarBlock}>
            {/*avatar*/}
            <Avatar
              alt={props.props.user_name + ' ' + props.props.user_second_name}
              src={props.props.reply_avatar_url}
              className={c.replyAvatar}
            />

            {/* reply user name and second name*/}
            <Typography variant="h6" gutterBottom>
              {props.props.user_name + ' ' + props.props.user_second_name}
            </Typography>
          </CardContent>
          {/*reply text*/}
          <Typography variant="body2" component="p" className={c.replyText}>
            {props.props.reply_text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
