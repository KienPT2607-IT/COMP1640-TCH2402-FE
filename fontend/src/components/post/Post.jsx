import "./post.css";
import { MoreVert } from "@material-ui/icons";
import Comments from "../comments/Comments";
import { useState, useEffect } from "react";
import contributionApi from "../../api/contributionApi";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

export default function Post({ post, eventId, handleToggleReloadContribution }) {
  const [commentOpen, setCommentOpen] = useState(false);
  const [like, setLike] = useState(post.like);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  }
  const likeHandler = () => {
    const handler = async () => {
      const response = await contributionApi.like(post.id)

      if (response) {
        handleToggleReloadContribution()
      }
    }

    handler()
  };

  const dislikeHandler = () => {
    const handler = async () => {
      const response = await contributionApi.dislike(post.id)

      if (response) {
        handleToggleReloadContribution()
      }
    }

    handler()
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
          </div>
          <div className="postTopRight">
          <span className="postDate">{formatDate(post.date)}</span>

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
  <ThumbUpIcon 
    className="likeIcon"
    onClick={likeHandler}
    color="primary" // Change color to primary to indicate active state
  />
  <span className="postLikeCounter">{post.like}</span>

  <ThumbDownIcon 
    className="likeIcon"
    onClick={dislikeHandler}
    color="secondary" // Change color to secondary to indicate active state
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
