import "./tableDepartment.css";
import { DataGrid } from "@mui/x-data-grid";
import { departmentColumns, departmentRows } from "../../dataDepartment";
import { Link } from "react-router-dom";
import { useState } from "react";

const TableDepartment = () => {
  const [data, setData] = useState(departmentRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/departments/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={`/departments/edit/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="editButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Department
        <Link to="/departments/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={departmentColumns.concat(actionColumn)}
        pageSize={3}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default TableDepartment;
