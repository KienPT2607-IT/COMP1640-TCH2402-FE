import "./editCampaign.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const EditCampaign = ({ title }) => {
  const [text, setText] = useState('Initial text');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const [StartTime, setStartTime] = useState(null);
  const [closureDate, setClosureDate] = useState(null);
  const [finalClosureDate, setFinalClosureDate] = useState(null);

  const handleStartTime = (newDateTime) => {
    setStartTime(newDateTime);
  };

  const handleClosureDate = (newDateTime) => {
    setClosureDate(newDateTime);
  };

  const handleFinalClosureDate = (newDateTime) => {
    setFinalClosureDate(newDateTime);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add Campaign</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="username">Name:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleTextChange}
                />
              </div>
              <div className="formInput">
                <label htmlFor="email">Start Time:</label>
                <DateTime
                  id="final-closure-date"
                  value={StartTime}
                  onChange={handleStartTime}
                />
              </div>
              <div className="formInput">
                <label htmlFor="username">Closure Date:</label>
                <DateTime
                  id="final-closure-date"
                  value={closureDate}
                  onChange={handleClosureDate}
                />
              </div>
              <div className="formInput">
                <label htmlFor="username">Final Closure Date:</label>
                <DateTime
                  id="final-closure-date"
                  value={finalClosureDate}
                  onChange={handleFinalClosureDate}
                />
              </div>
              <div className="formInput">
                <label htmlFor="username">Department:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={handleTextChange}
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

export default EditCampaign;
