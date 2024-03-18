import "./listCampaign.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TableCampaign from "../../components/tableCampaign/TableCampaign"

const ListCampaign = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <TableCampaign/>
      </div>
    </div>
  )
}

export default ListCampaign