import "./tableCampaign.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const TableCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem('x-auth-token');
    console.log("Token:", token);
    if (token) {
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      console.log("Config:", config);
      //chưa đổi link api của campaigns
      axios.get('https://comp1640-tch2402-be.onrender.com/users', config) // Sửa URL endpoint để phù hợp với endpoint của bạn
        .then(response => {
          console.log("Response:", response.data.data); // Dữ liệu trả về từ server được lưu trong response.data.data
          setCampaigns(response.data.data); // Lưu dữ liệu người dùng vào state
        })
        .catch(error => console.error("Error:", error));
    }
  }, []);

  return (
    <div className="datatable-container">
      <h1>Campaign Data</h1>
      <table className="datatable">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(campaign => (
            <tr key={campaign._id}>
              <td>{campaign.full_name}</td>
              <td>{campaign.email}</td>
              <td>{campaign.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCampaign;
