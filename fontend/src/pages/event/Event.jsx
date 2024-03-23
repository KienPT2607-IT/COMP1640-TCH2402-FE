import "./event.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ListEvent from "../../components/listEvent/ListEvent"

const Event = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ListEvent/>
      </div>
    </div>
  )
}

export default Event