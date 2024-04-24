/* eslint-disable jsx-a11y/no-redundant-roles */
import "./cardEvent.css";
import { MoreVert } from "@material-ui/icons";
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import 'tippy.js/dist/tippy.css'; // optional
import { useState } from "react";
import eventApi from "../../api/eventApi";
import toast, { Toaster } from 'react-hot-toast';

export default function CardEvent({ event, handleReload }) {
  console.log('event', event)
  const [isEdit, setIsEdit] = useState(false)
  const [name, setName] = useState(event.name)
  const [dueDate, setDueDate] = useState(event.due_date)
  const [description, setDescription] = useState(event.description)
  const [closureDate, setClosureDate] = useState(event.closure_date)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleUpdate = async () => {
    const response = await eventApi.update(event._id, {
      name,
      description,
      due_date: dueDate,
      closure_date: closureDate
    })

    if (response) {
      setIsEdit(!isEdit)
      handleReload()
      toast.success('Cập nhật event thành công', {
        position: "top-right",
        reverseOrder: true,
        duration: 6000,
      });
    } else {
      setIsEdit(!isEdit)
      toast.error('Cập nhật event thất bại', {
        position: "top-right",
        reverseOrder: true,
        duration: 6000,
      });
    }
  }
  function convertDateFormat(isoDate) {
    const date = new Date(isoDate);
    
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {
              !isEdit ?
                <span className="postUsername">
                  {event.name}
                </span> :
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên event"></input>
            }

          </div>
          <div>
            {
              !isEdit ?
                <span className="postDueDate">Due date: {convertDateFormat(event.due_date)}</span> :
                <>
                  <label htmlFor="dudate">Due date:</label>
                  <input onChange={(e) => {
                    setDueDate(e.target.value)
                  }} value={dueDate} type="datetime-local" id="dudate" name="dudate"></input>
                </>
            }

            {
              !isEdit ?
                <span className="postDate">Closure Date: {convertDateFormat(event.closure_date)}</span>
                :
                <>
                  <label htmlFor="closureDate">Closure Date:</label>
                  <input onChange={(e) => {
                    setClosureDate(e.target.value)
                  }} value={closureDate} type="datetime-local" id="closureDate" name="closureDate"></input>
                </>
            }
            {
              isEdit && <Button className="cancelButton" onClick={() => {
                setIsEdit(!isEdit)
              }}>Cancel</Button>
            }

          </div>
          <div className="postTopRight">
            <div aria-describedby={id} variant="contained" onClick={handleClick}>
              <MoreVert />
            </div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Button className="editButton" onClick={() => {
                setIsEdit(!isEdit)
              }}>Edit</Button>
            </Popover>
          </div>
        </div>
        <div className="postCenter">
          {
            !isEdit ? <span className="postText">Description: {event.description}</span> :
              <input value={description} onChange={(e) => setDescription(e.target.value)} className="input-description" placeholder="Nhap noi dung"></input>
          }

        </div>

        {
          !isEdit ? <form>
            <Link 
              to={{
                pathname: "/contribution"
              }}
              state={{ eventId: event._id }}
              className="detailButton"
            >
              Detail
            </Link>
          </form> :
            <Button className="saveButton" onClick={handleUpdate}>Save</Button>
        }


      </div>
    </div>
  );
}
