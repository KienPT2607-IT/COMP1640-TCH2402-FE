import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";

import { useEffect, useState } from "react";
import contributionApi from "../../api/contributionApi";

const Feed = ({ eventId }) => {
  const [contribution, setContribution] = useState([]);
  const [toggleReloadContribution, setToggleReloadContribution] = useState(false);
  const [limit, setLimit] = useState(5); // Giới hạn số lượng contribution
  const [showAll, setShowAll] = useState(false); // Để xem tất cả contribution

  const handleToggleReloadContribution = () => {
    setToggleReloadContribution(!toggleReloadContribution);
  };

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const params = {
          _limit: limit,
        };
        const response = await contributionApi.getAll(eventId, params);

        const mockdata = response.data.map((item) => {
          return {
            id: item._id,
            desc: item.content,
            uploads: item.uploads,
            date: item.submission_date,
            like: item.like_count,
            dislike: item.dislike_count,
            contributorFullName: item.contributor.full_name,
            contributorProfilePicture: item.contributor.profile_picture,
          };
        });

        console.log("mockdata", mockdata);

        setContribution(mockdata);
      } catch (error) {
        console.log("Fail to fetch", error);
      }
    };

    fetchContributions();
  }, [eventId, toggleReloadContribution, limit]);

  const handleShowAll = () => {
    setShowAll(!showAll);
    setLimit(showAll ? 5 : contribution.length); // Hiển thị tất cả hoặc giới hạn 5 phần tử
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share eventId={eventId} handleToggleReloadContribution={handleToggleReloadContribution} />
        {contribution.length > 0 && contribution.map((p) => (
          <Post handleToggleReloadContribution={handleToggleReloadContribution}
           key={p.id} post={p} eventId={eventId} />
        ))}
        {!showAll && contribution.length > 5 && (
          <button onClick={handleShowAll} className="showMoreBtn">
            Xem thêm
          </button>
        )}
      </div>
    </div>
  );
};

export default Feed;
