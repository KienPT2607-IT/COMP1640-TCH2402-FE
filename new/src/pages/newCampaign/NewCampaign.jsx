import "./newCampaign.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const NewCampaign = ({ title }) => {
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

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
        <label htmlFor="">Name</label>
        <input 
        label="Name"
        inputStyle="box" 
        labelStyle="floating" 
        placeholder="Enter name" />
    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
    <div className="row">
            <label htmlFor="datepicker1">Start time:</label>
            <DateTime
              id="datepicker1"
              value={StartTime}
              onChange={handleStartTime}
              inputProps={{ placeholder: 'MM/DD/YY hh/mm/aa' }}
            />
          </div>    
          </div>
    <div className="mbsc-col-12 mbsc-col-lg-6">
    <div className="row">
            <label htmlFor="datepicker2">Closure Date:</label>
            <DateTime
              id="datepicker2"
              value={closureDate}
              onChange={handleClosureDate}
              inputProps={{ placeholder: 'Select date and time' }}
            />
          </div>    </div>
</div>
<div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
    <div className="row">
            <label htmlFor="datepicker3">Final Closure Date:</label>
            <DateTime
              id="datepicker3"
              value={finalClosureDate}
              onChange={handleFinalClosureDate}
              inputProps={{ placeholder: 'MM/DD/YY hh/mm/aa' }}
            />
          </div>    </div>
    <div className="mbsc-col-12 mbsc-col-md-6 mbsc-col-lg-3">
    <label htmlFor="">Department:</label>

        <input label="Department" inputStyle="box" labelStyle="floating" placeholder=" " />
    </div>
</div>
<div className="mbsc-row">
    <div className="mbsc-col-12 mbsc-col-md-12 mbsc-col-lg-3">

        <div className="mbsc-button-group-block">
            <button color="success">Add Campaign</button>
        </div>
    </div>
</div>
      </div>
    </div>
  );
};

export default NewCampaign;
