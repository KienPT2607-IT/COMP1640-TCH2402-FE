import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";

import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import contributionApi from "../../api/contributionApi";

const Feed = () => {
  const { feed, setFeed } = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await contributionApi.getAll(eventId);
        console.log(response);
        setUsers(response.data)
      } catch (error) {
        console.log('Fail to fetch', error)
      }
    }
    fetchUsers();
  }, []);


  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};
export default Feed;

