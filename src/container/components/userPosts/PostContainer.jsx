import "./userPosts.css"
const PostContainer1 = ({key, id, text, user, Btn, img, Eliminar, edit}) => {
  
  return (
    <div key={key} className="Private_Post" id={id}>
        <div className="UserInfo">
         <img src={img} alt="" className="userPostImg"/>
        </div>
        <div className="info_Post_Area">
        <textarea className="info" disabled value={text} ></textarea>
        <div className="Btns_AreaP">
          {Btn}
          {Eliminar}
          {edit}
        </div>
        </div>
    </div>
  )
}

export default PostContainer1