import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState, useEffect } from "react";
import contributionApi from "../../api/contributionApi";

export default function Post({ post, eventId }) {
  const [like, setLike] = useState(post.like);
  const [comment, setComment] = useState(post.comment);
  const [commentText, setCommentText] = useState("");
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await contributionApi.getAll(eventId);
        console.log(response);
        setContributions(response.data);
      } catch (error) {
        console.log('Fail to fetch contributions', error);
      }
    };
    fetchContributions();
  }, [eventId]);

  const likeHandler = () => {
    setLike(like + 1);
  };

  const dislikeHandler = () => {
    setLike(like - 1);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    setComment(comment + 1);
    setCommentText("");
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profile_picture}
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
          >
            post
          </button>
        </form>
      </div>

      Hiển thị danh sách các đóng góp
      <div className="contributions">
        {contributions.map((contribution) => (
          <div key={contribution._id} className="contribution">
            {/* Hiển thị thông tin của từng đóng góp */}
            <div>
              <h3>Contributor: {contribution.contributor}</h3>
              <p>Content: {contribution.content}</p>
              {/* Hiển thị ảnh nếu có */}
              {contribution.uploads && contribution.uploads.length > 0 && (
                <div>
                  <h4>Uploads:</h4>
                  <ul>
                    {contribution.uploads.map((upload, index) => (
                      <li key={index}>{upload}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p>Like Count: {contribution.like_count}</p>
              <p>Dislike Count: {contribution.dislike_count}</p>
              <p>Submission Date: {contribution.submission_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
