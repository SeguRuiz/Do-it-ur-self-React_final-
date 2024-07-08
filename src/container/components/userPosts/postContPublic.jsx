import CommentsModal from "../postsComments/CommentsModal"
const PostContPublic = ({key, id, text, user, img}) => {
  return (
    <div key={key} className="Private_Post" id={id}>
        <div className="UserInfo">
         <img src={img} alt="'no image" className="userPostImg"/>
        </div>
        <div className="info_Post_Area">
        <textarea className="info" disabled value={text} ></textarea>
        <div className="Btns_AreaP">
            <p>{user}</p>
            <CommentsModal post_id={id} />
        </div>
        </div>
    </div>
  )
}

export default PostContPublic