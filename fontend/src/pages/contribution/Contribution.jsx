import "./contribution.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Feed from "../../components/feed/Feed"

const Contribution = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Feed/>
      </div>
    </div>
  )
}

export default Contribution;