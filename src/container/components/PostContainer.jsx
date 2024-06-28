
const PostContainer = ({key, id, text, user, Btn}) => {
  return (
    <div key={key} className="Private_Post" id={id}>
        <div className="UserInfo">
          <div className="circle"></div>
          <p className="user">{user}</p>
          {Btn}
        </div>
        <div className="Pincipal">
          stuff
        </div>
        <textarea className="info" disabled value={text} ></textarea>
    </div>
  )
}

export default PostContainer