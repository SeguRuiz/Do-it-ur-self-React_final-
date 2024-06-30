
const PostContainer1 = ({key, id, text, user, Btn}) => {
  return (
    <div key={key} className="Private_Post" id={id}>
        <div className="UserInfo">
         
        </div>
        <div className="info_Post_Area">
        <textarea className="info" disabled value={text} ></textarea>
        <div className="Btns_Area">
          {Btn}
        </div>
        </div>
    </div>
  )
}

export default PostContainer1