  import "./newEvent.css";
  import Sidebar from "../../components/sidebar/Sidebar";
  import Navbar from "../../components/navbar/Navbar";
  import { useState } from "react";
  import eventApi from "../../api/eventApi"
  import DateTime from 'react-datetime';
  import 'react-datetime/css/react-datetime.css';
  import toast, { Toaster } from 'react-hot-toast';


  const NewEvent = ({ }) => {
    const showToastMessageSuccess = (mesage) => {
      toast.success(mesage, {
        position: "top-right",
        reverseOrder: true,
        duration: 6000,
      });
    };

    const showToastMessagFail = (mesage) => {
      toast.error(mesage, {
        position: "top-right",
        reverseOrder: true,
        duration: 6000,
      });
    };
    const [name, setName] = useState('');
    const [create_date, setCreateDate] = useState(new Date());
    const [due_date, setDueDate] = useState('');
    const [closure_date, setClosureDate] = useState('');
    const [description, setDescription] = useState('');


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'name':
          setName(value);
          break;
        case 'description':
          setDescription(value);
          break;
        default:
          break;
      }
    };

    const handleDateTimeChange = (name, newDateTime) => {
      switch (name) {
        case 'create_date':
          setCreateDate(newDateTime);
          break;
        case 'due_date':
          setDueDate(newDateTime);
          break;
        case 'closure_date':
          setClosureDate(newDateTime);
          break;
        default:
          break;
      }
    };

    const handleSubmit  = async (e) => {
      e.preventDefault();
    if (due_date <= create_date) {
      showToastMessagFail("Due Date must be after Create Date");
      return;
    }

    if (closure_date <= due_date) {
      showToastMessagFail("Closure Date must be after Due Date");
      return;
    }
      try {
        let data = {
          "name": name,
          "create_date": create_date,
          "due_date": due_date,
          "closure_date": closure_date,
          "description": description,
                }
        const response = await eventApi.create(data);
        console.log(response);
        showToastMessageSuccess(response.message);
      } catch (error) {
        console.log('Fail to fetch', error)
        showToastMessagFail(error.message);
      }
    }

    return (
      <div className="new">
              <Toaster />
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
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="create_date">Create Date:</label>
                  <DateTime
                    id="create_date"
                    value={create_date}
                    onChange={(newDateTime) => handleDateTimeChange('create_date', newDateTime)}
                    required
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="due_date">Due Date:</label>
                  <DateTime
                    id="due_date"
                    value={due_date}
                    onChange={(newDateTime) => handleDateTimeChange('due_date', newDateTime)}
                    required
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="closure_date">Closure Date:</label>
                  <DateTime
                    id="closure_date"
                    value={closure_date}
                    onChange={(newDateTime) => handleDateTimeChange('closure_date', newDateTime)}
                    required
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="description">Description:</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
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
