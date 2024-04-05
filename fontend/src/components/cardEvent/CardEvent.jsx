import "./cardEvent.css";
import { MoreVert } from "@material-ui/icons";

export default function CardEvent({ event }) {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <span className="postUsername">
              {event.name}
            </span>
          </div>
          <div>
              <span className="postDate">Start Date: {event.create_date}</span>
              <span className="postDate">Final Date: {event.due_date}</span>
            </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Description: {event.description}</span>
        </div>

        <form>
          <button className="btnPost" alt="">Detail</button>
        </form>

      </div>
    </div>
  );
}
