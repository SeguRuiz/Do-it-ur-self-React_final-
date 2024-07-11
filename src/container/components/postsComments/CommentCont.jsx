import React from 'react'
import "./comments.css"
import { useTheContext } from '../../../context/ContextProvider'
import EliminarC from './EliminarC'
const CommentCont = ({userId, userName, text, key,  post_Id, comment_Id, img}) => {
const {userInfo} = useTheContext()

//Machote de los comentarios
  return (
    <>
    <div key={key} className='commentContainer'>
      <div className='userCinfo'>
        <div className='commentPerfil'>
          <img src={img} alt="" className='commentImg' />
        </div>
        <div className='name'>
        <h3 className='userName'>{userName}</h3>
        </div>
      </div>
     <div className='userText'>
      <textarea value={text} disabled  className='commentTextarea'></textarea>
      <div className='eliminateComment'>
     {userInfo.id == userId ? <EliminarC post_id={post_Id} comment_Id={comment_Id}/> : <></>}
     </div>
     </div>
    </div>
    </>
  )
}

export default CommentCont