import Post from "../post/Post";
import "./listEvent.css";
import Share from "../share/Share";

import { campaignRows } from "../../dataCampaign";
import CardEvent from "../cardEvent/CardEvent";

const ListEvent = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <h2>Event</h2>
        {campaignRows.map((p) => (
          <CardEvent key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
};
export default ListEvent;

