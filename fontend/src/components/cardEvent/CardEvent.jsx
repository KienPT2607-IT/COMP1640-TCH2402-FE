import "./cardEvent.css";
import { MoreVert } from "@material-ui/icons";

export default function CardEvent({ event }) {
  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const formattedDate = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`;
    const formattedTime = `${dateTime.getHours()}:${String(dateTime.getMinutes()).padStart(2, '0')}:${String(dateTime.getSeconds()).padStart(2, '0')}`;
    return `${formattedDate} ${formattedTime}`;
  };
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
              <span className="postDate">Start Date: {formatDateTime(event.last_update)}</span>
              <span className="postDate">Final Date: {formatDateTime(event.last_update)}</span>
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
