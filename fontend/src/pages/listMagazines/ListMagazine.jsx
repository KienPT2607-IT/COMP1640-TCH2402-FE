import "./ListMagazine.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Table from "../../components/table/Table"

const ListMagazine = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Table/>
      </div>
    </div>
  )
}

export default ListMagazine