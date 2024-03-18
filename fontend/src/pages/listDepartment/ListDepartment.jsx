import "./listDepartment.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import TableDepartment from "../../components/tableDepartment/TableDepartment"

const ListDepartment = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <TableDepartment/>
      </div>
    </div>
  )
}

export default ListDepartment