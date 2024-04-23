import Post from "../post/Post";
import "./listEvent.css";
import Share from "../share/Share";
import { campaignRows } from "../../dataCampaign";
import CardEvent from "../cardEvent/CardEvent";
import { useEffect, useState } from "react";
import eventApi from '../../api/eventApi';

const ListEvent = () => {
  const [events, setEvents] = useState([]);
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await eventApi.getAll();
        console.log(response);
        setEvents(response.data)
      } catch (error) {
        console.log('Fail to fetch', error)
      }
    }
    fetchUsers();
  }, [toggle]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <h2>Event</h2>
        {events.map(event => (
          <div className="post" key={event._id}>
            <CardEvent handleReload={() => setToggle(!toggle)} event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ListEvent;

