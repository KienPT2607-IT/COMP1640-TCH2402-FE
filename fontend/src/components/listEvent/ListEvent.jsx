import Post from "../post/Post";
import "./listEvent.css";
import Share from "../share/Share";
import { campaignRows } from "../../dataCampaign";
import CardEvent from "../cardEvent/CardEvent";
import { useEffect, useState } from "react";
import axios from "axios";

const ListEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('x-auth-token');
    console.log("Token:", token);
    if (token) {
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      console.log("Config:", config);
      axios.get('https://comp1640-tch2402-be.onrender.com/events', config) // Sửa URL endpoint để phù hợp với endpoint của bạn
        .then(response => {
          console.log("Response:", response.data.data); // Dữ liệu trả về từ server được lưu trong response.data.data
          setEvents(response.data.data); // Lưu dữ liệu người dùng vào state
        })
        .catch(error => console.error("Error:", error));
    }
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <h2>Event</h2>
        {events.map(event => (
           <div key={event._id} className="post">
           <CardEvent event={event} key={event._id} />
         </div>
        ))}
      </div>
    </div>
  );
};
export default ListEvent;

