import { useState, useEffect } from "react";
import "./comments.css";
import commentApi from "../../api/commentApi";

const Comments = ({ contributionId, eventId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await commentApi.getAll(contributionId, eventId);

        // Kiểm tra xem response.data có tồn tại và có phải là mảng không
        if (response && Array.isArray(response.data)) {
          const mockdatacomment = response.data.map(item => {
            return {
              id: item._id,
              content: item.content,
              commenterFullName: item.commenter.full_name,
              commenterPicture: item.commenter.profile_picture
            };
          });
          
          console.log('mockdatacomment', mockdatacomment);
          setComments(mockdatacomment);
        } else {
          console.error("Invalid response data:", response);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    console.log("contributionID", contributionId);
    console.log("eventId", eventId);
    
    fetchComments();
  }, [contributionId, eventId]);

  return (
    <div className="comments">
      {comments.length > 0 && comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.commenterPicture} alt="" />
          <div className="info">
            <span>{comment.commenterFullName}</span>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
