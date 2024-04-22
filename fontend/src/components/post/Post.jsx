import "./post.css";
import { MoreVert } from "@material-ui/icons";
import Comments from "../comments/Comments";
import { useState, useEffect } from "react";
import commentApi from "../../api/commentApi";

export default function Post({ post, eventId }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [like, setLike] = useState(post.like);


  const likeHandler = () => {
    setLike(like + 1);
  };

  const dislikeHandler = () => {
    setLike(like - 1);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={post.contributorProfilePicture}
              alt=""
            />
            <span className="postUsername">
              {post.contributorFullName}
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
        <div className="postCenter">
          {post?.uploads && post.uploads.length > 0 && (
            <div>
              <h4>Uploads:</h4>
              <ul>
                {post.uploads.map((uploads, index) => (
                  <li key={index}>
                    {/* Liên kết tải xuống */}
                    <a href={uploads} download>
                      {uploads}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="img/like.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{post.like}</span>

            <img
              className="likeIcon"
              src="img/dislike.png"
              onClick={dislikeHandler}
              alt=""
            />
            <span className="postLikeCounter">{post.dislike}</span>


          </div>
          <div className="postBottomRight">
            <span className="postCommentText" onClick={() => setCommentOpen(!commentOpen)}>{post.comment} comments</span>
          </div>
        </div>
        {commentOpen && <Comments contributionId={post.id} eventId={eventId} />}
      </div>
    </div>
  );
}
