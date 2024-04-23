import { useState, useEffect } from "react";
import "./comments.css";
import commentApi from "../../api/commentApi";

const Comments = ({ contributionId, eventId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState([]);
  const [toggleReload, setToggleReload] = useState(false)
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await commentApi.getAll(contributionId);

        // Kiểm tra xem response.data có tồn tại và có phải là mảng không
        if (response && Array.isArray(response)) {
          const mockdatacomment = response.map(item => {
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
    
    fetchComments();
  }, [contributionId, eventId, toggleReload]);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = () => {
    const handler = async () => {
      const data = {
        contribution: contributionId,
        content: newComment
      }
  
      const response =  await commentApi.create(data)   
      if(response && response._id){

      } 
      else {
        console.log('response', response)

      }
      setNewComment("");
      setToggleReload(!toggleReload)
    }

    handler()
  };

  return (
    <div className="comments">
       <div className="write">
        <img src={"https://thietbiquayphim.com/wp-content/uploads/2022/04/tao-background-chup-anh-tai-nha-1.png"} alt="" />
        <input
          type="text"
          placeholder="write a comment"
          value={newComment}
          onChange={handleInputChange} 
        />
        <button onClick={handleSubmitComment}>Send</button> 
      </div>
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


// import { useState, useEffect } from "react";
// import "./comments.css";
// import commentApi from "../../api/commentApi";

// const Comments = ({ contributionId, eventId }) => {
//   const [comments, setComments] = useState([]);

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const response = await commentApi.getAll(contributionId, eventId);

//         // Kiểm tra xem response.data có tồn tại và có phải là mảng không
//         if (response && Array.isArray(response.data)) {
//           const mockdatacomment = response.data.map(item => {
//             return {
//               id: item._id,
//               content: item.content,
//               commenterFullName: item.commenter.full_name,
//               commenterPicture: item.commenter.profile_picture
//             };
//           });
          
//           console.log('mockdatacomment', mockdatacomment);
//           setComments(mockdatacomment);
//         } else {
//           console.error("Invalid response data:", response);
//         }
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     };

//     console.log("contributionID", contributionId);
//     console.log("eventId", eventId);
    
//     fetchComments();
//   }, [contributionId, eventId]);

//   return (
//     <div className="comments">
//       {comments.length > 0 && comments.map((comment) => (
//         <div className="comment" key={comment.id}>
//           <img src={comment.commenterPicture} alt="" />
//           <div className="info">
//             <span>{comment.commenterFullName}</span>
//             <p>{comment.content}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Comments;
