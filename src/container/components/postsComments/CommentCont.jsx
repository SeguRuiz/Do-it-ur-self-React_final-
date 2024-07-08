import React from 'react'
import "./comments.css"
import { useTheContext } from '../../../context/ContextProvider'
import EliminarC from './EliminarC'
const CommentCont = ({userId, userName, text, key,  post_Id, comment_Id}) => {
const {userInfo} = useTheContext()


  return (
    <>
    <div key={key} className='commentContainer'>
    <h3 className='userName'>{userName}</h3>
    <p className='text'>{text}</p>
     {userInfo.id == userId ? <EliminarC post_id={post_Id} comment_Id={comment_Id}/> : <></>}
    </div>
    </>
  )
}

export default CommentCont