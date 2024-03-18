import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like,setLike] = useState(post.like)
  const [comment,setComment] = useState(post.comment)
  const [commentText, setCommentText] = useState(""); // State for comment text

  const likeHandler =()=>{
    setLike(like+1)
  };

  const dislikeHandler =()=>{
    setLike(like-1)
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    setComment(comment+1)
    setCommentText("");
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          
          <span className="postText">{post?.desc}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="img/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="img/dislike.png"
              onClick={dislikeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
        <form>
        <input
            type="text"
            className="commentInput"
            placeholder="Add a comment..."
            value={commentText}
            onChange={handleCommentChange}
          />
            <button
            className="btnPost"
            onClick={handleCommentSubmit}
            alt=""
            >post</button>
            </form>
                    
      </div>
    </div>
  );
}