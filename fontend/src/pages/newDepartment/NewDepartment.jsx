import "./newdepartment.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import 'react-datetime/css/react-datetime.css';

const NewDepartment = ({ title }) => {
  const [text, setText] = useState('Initial text');

  const handleTextChange = (event) => {
    setText(event.target.value);
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
          <h1>Add Department</h1>
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

export default NewDepartment;
