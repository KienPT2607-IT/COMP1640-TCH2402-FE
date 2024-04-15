import { useState } from "react";
import "./comments.css";
import { Users, Posts, Commentss } from "../../dummyData";
import moment from "moment";

const Comments = ({ postId }) => {
  const [newComment, setNewComment] = useState(""); 

  const postComments = Commentss.filter(comment => comment.postId === postId);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    const newCommentList = [
      ...Commentss,
      {
        id: Commentss.length + 1,
        desc: newComment,
        userId: 1,
        postId: 1, 
      }
    ];

    setNewComment(newCommentList);

    setNewComment("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={Users.find(user => user.id === Posts.find(post => post.id === postId).userId)?.profilePicture} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={newComment}
          onChange={handleInputChange} 
        />
        <button onClick={handleSubmitComment}>Send</button> 
      </div>
      {postComments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={Users.find(user => user.id === comment.userId)?.profilePicture} alt="" />
          <div className="info">
            <span>{Users.find(user => user.id === comment.userId)?.username}</span>
            <p>{comment.desc}</p>
          </div>
          
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
