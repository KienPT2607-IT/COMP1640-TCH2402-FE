import "./newEvent.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const NewEvent = ({ }) => {
  const [campaignName, setCampaignName] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [closureDate, setClosureDate] = useState(null);
  const [finalClosureDate, setFinalClosureDate] = useState(null);
  const [department, setDepartment] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'campaignName':
        setCampaignName(value);
        break;
      case 'department':
        setDepartment(value);
        break;
      default:
        break;
    }
  };

  const handleDateTimeChange = (name, newDateTime) => {
    switch (name) {
      case 'startTime':
        setStartTime(newDateTime);
        break;
      case 'closureDate':
        setClosureDate(newDateTime);
        break;
      case 'finalClosureDate':
        setFinalClosureDate(newDateTime);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const campaignData = {
      campaignName: campaignName,
      startTime: startTime,
      closureDate: closureDate,
      finalClosureDate: finalClosureDate,
      department: department
    };
    console.log("New campaign data:", campaignData);
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Event</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="campaignName">Name:</label>
                <input
                  type="text"
                  id="campaignName"
                  name="campaignName"
                  value={campaignName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="startTime">Create Date:</label>
                <DateTime
                  id="startTime"
                  value={startTime}
                  onChange={(newDateTime) => handleDateTimeChange('startTime', newDateTime)}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="startTime">Due Date:</label>
                <DateTime
                  id="startTime"
                  value={startTime}
                  onChange={(newDateTime) => handleDateTimeChange('startTime', newDateTime)}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="closureDate">Closure Date:</label>
                <DateTime
                  id="closureDate"
                  value={closureDate}
                  onChange={(newDateTime) => handleDateTimeChange('closureDate', newDateTime)}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="finalClosureDate">Is Enable</label>
                <DateTime
                  id="finalClosureDate"
                  value={finalClosureDate}
                  onChange={(newDateTime) => handleDateTimeChange('finalClosureDate', newDateTime)}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="department">Last Update:</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={department}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="department">Create by:</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={department}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formInput">
                <label htmlFor="department">Description:</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={department}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;
