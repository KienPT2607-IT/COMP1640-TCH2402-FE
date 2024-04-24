import React from "react";
import "./viewDetailCampaign.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";

const ViewDetailCampaign = () => {
  const { campaignId } = useParams();
  const campaign = campaignRows.find((campaign) => campaign.id === parseInt(campaignId));

  if (!campaign) {
    return <div>campaign not found</div>;
  }

  return (

    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{campaign.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">{campaign.department}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Closure Date:</span>
                  <span className="itemValue">{campaign.closure}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Final Closure Date:</span>
                  <span className="itemValue">{campaign.final}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Start Time:</span>
                  <span className="itemValue">{campaign.start}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ViewDetailCampaign;