import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import userApi from "../../api/userApi";
import Select from "react-select";
import toast, { Toaster } from 'react-hot-toast';


const New = ({ }) => {
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
  const facultyOptions = [
    { value: "Graphic and Digital Design", label: "Graphic and Digital Design" },
    { value: "IT", label: "IT" },
    { value: "Graphic and Digital Design", label: "Graphic and Digital Design" }
  ];

  const roleOptions = [
    { value: "Marketing Coordinator", label: "Marketing Coordinator" },
    { value: "Student", label: "Student" },
    { value: "Marketing Manager", label: "Marketing Manager" },
    { value: "Admin", label: "Admin" },
    { value: "Guest", label: "Guest" }
  ];

  const genderOptions = [
    { value: true, label: "Male" },
    { value: false, label: "Female" }
  ];


  const [picture_profile, setFile] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState(genderOptions[0].value);
  const [phone, setPhone] = useState('');
  const [faculty, setFaculty] = useState(facultyOptions[0].value);
  const [role, setRole] = useState(roleOptions[0].value);

  const handleDateChange = (date) => {
    setDob(date);
  };
  const handleChange = (e) => {
    setSelectedUser({
      ...selectedUser,
      [e.target.name]: e.target.value,
    });
    // data[e.target.name] = e.target.value;
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    // Handle form submission
    console.log("Add user data:", selectedUser);
  };

  const roleChangeHandler = (event) => {
    setRole(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };

  const facultyChangeHandler = (event) => {
    setFaculty(event.target.value);
    console.log(
      "User Selected Value - ",
      event.target.value
    );
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      console.log("Da vo day");
      let data = {
        "full_name": fullName,
        "email": email,
        "password": password,
        "dob": dob,
        "gender": gender,
        "phone_number": phone,
        "faculty": faculty,
        "role": role,
      }
      const response = await userApi.create(data);
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
          <h1>Add User</h1>
        </div>
        <div className="bottom">
          <div className="left">
          </div>
          <div className="right">
            <form onSubmit={submitForm}>
              <div className="formInput">
                <label htmlFor="role">Role:</label>
                <Select name="role" value={roleOptions.value}
                  options={roleOptions}
                  defaultValue={roleOptions[0]} onChange={(selection) => setRole(selection.value)} />
              </div>
              <div className="formInput">
                <label htmlFor="faculty">Faculty:</label>
                <Select name="faculty" value={facultyOptions.value}
                  options={facultyOptions}
                  defaultValue={facultyOptions[0]} onChange={(selection) => setFaculty(selection.value)} />
              </div>
              <div className="formInput">
                <label htmlFor="fullName">Name:</label>
                <input
                  name="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label htmlFor="gender">Gender:</label>
                <Select name="gender" value={genderOptions.value}
                  options={genderOptions}
                  defaultValue={genderOptions[0]} onChange={(selection) => setGender(selection.value)} />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email:</label>
                <input
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label htmlFor="pasword">Password:</label>
                <input
                  name="password"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label htmlFor="phone">Phone:</label>
                <input
                  name="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label htmlFor="dob">DOB:</label>
                <DatePicker
                  selected={dob}
                  onChange={(value) => setDob(value)}
                  dateFormat="dd/MM/yyyy"
                // You can customize the date format according to your needs
                />
              </div>
              <input className="button_submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
