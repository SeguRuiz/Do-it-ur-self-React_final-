import CommentsModal from "../postsComments/CommentsModal";
import "./Posts.css";
const PostContPublic = ({ key, id, text, user, img, profileImg }) => {
  return (
    <div
      key={key}
      className={img == "" ? "Public_PostNoimage" : "Public_Post"}
      id={id}
    >
      {img == "" ? (
        <></>
      ) : (
        <div className="UserInfoP">
          <img src={img} alt="'no image" className="userPostImgP" />
        </div>
      )}
      <div className="info_Post_Area_Public">
        <textarea className="infoP" disabled value={text}></textarea>
        <div className="Btns_AreaPublic">
          <div className="userProfile_area">
            <div className="profileCircle">
              <img src={profileImg} alt="" className="profileImg" />
            </div>
            <h3 className="userName">{user}</h3>
          </div>
          <div className="commentsArea">
            <CommentsModal post_id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContPublic;
