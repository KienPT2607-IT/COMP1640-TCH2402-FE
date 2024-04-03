import "./list.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import axios from "axios"

const List = () => {
  // axios.get('https://comp1640-tch2402-be.onrender.com/users')
  // .then(res=>{
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List