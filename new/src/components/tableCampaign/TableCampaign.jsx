import "./tableCampaign.css";
import { DataGrid } from "@mui/x-data-grid";
import { campaignColumns, campaignRows } from "../../dataCampaign";
import { Link } from "react-router-dom";
import { useState } from "react";

const TableCampaign = () => {
  const [data, setData] = useState(campaignRows);

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
            <Link to="/users/view" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to="/campaigns/newCampaign" style={{ textDecoration: "none" }}>
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
    </div>
  );
};

export default TableCampaign;
