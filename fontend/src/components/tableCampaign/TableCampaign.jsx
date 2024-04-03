import "./tableCampaign.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TableCampaign = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://comp1640-tch2402-be.onrender.com/users/campaigns/");
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://comp1640-tch2402-be.onrender.com/users/campaigns/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      setError("Error deleting campaign");
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/campaigns/view/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={`/campaigns/edit/${params.row.id}`} style={{ textDecoration: "none" }}>
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

  const campaignColumns = [ // Define your columns here
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 230 },
    // Add other columns as needed
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Campaign
        <Link to="/campaigns/newCampaign" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={campaignColumns.concat(actionColumn)}
        pageSize={3}
        rowsPerPageOptions={[5]}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default TableCampaign;
