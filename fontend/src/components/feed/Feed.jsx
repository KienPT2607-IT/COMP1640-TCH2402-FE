import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";

import { useEffect, useState } from "react";
import contributionApi from "../../api/contributionApi";

const Feed = ({ eventId }) => {
  const [contribution, setContribution] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const contributionsPerPage = 5;
  const [toggleReloadContribution, setToggleReloadContribution] = useState(false);

  const handleToggleReloadContribution = () => {
    setToggleReloadContribution(!toggleReloadContribution);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const fetchContributions = async () => {
      console.log('call api');
      try {
        const response = await contributionApi.getAll(eventId);

        const mockdata = response.data.map(item => {
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

        console.log('mockdata', mockdata);

        setContribution(mockdata);

      } catch (error) {
        console.log('Fail to fetch', error);
      }
    };

    fetchContributions();
  }, [eventId, toggleReloadContribution]);

  const indexOfLastContribution = currentPage * contributionsPerPage;
  const indexOfFirstContribution = indexOfLastContribution - contributionsPerPage;
  const currentContributions = contribution.slice(indexOfFirstContribution, indexOfLastContribution);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share eventId={eventId} handleToggleReloadContribution={handleToggleReloadContribution} />
        {currentContributions.map((p) => (
          <Post handleToggleReloadContribution={handleToggleReloadContribution}
            key={p.id} post={p} eventId={eventId} />
        ))}
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Trang trước
          </button>
          <button onClick={handleNextPage} disabled={currentContributions.length < contributionsPerPage}>
            Trang tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;
