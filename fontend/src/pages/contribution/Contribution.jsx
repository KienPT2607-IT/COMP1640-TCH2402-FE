import "./contribution.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Feed from "../../components/feed/Feed"
import { useLocation } from "react-router-dom"

const Contribution = () => {
  const location = useLocation();
  const {eventId} = location.state;

  console.log('eventId', eventId);

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Feed eventId={eventId}/>
      </div>
    </div>
  )
}

export default Contribution;