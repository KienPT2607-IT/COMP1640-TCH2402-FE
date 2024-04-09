import "./tableCampaign.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import eventApi from '../../api/eventApi'
import React from "react";
import { MoreVert } from "@material-ui/icons";

const TableCampaign = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await eventApi.getAll();
        console.log(response);
        setEvents(response.data)
      } catch (error) {
        console.log('Fail to fetch', error)
      }
    }
    fetchEvents();
  }, []);

  return (
    <div className="datatable-container">
      <h1>Event Data</h1>
      <table className="datatable">
        <thead>
          <tr>
            <th> Name</th>
            <th>Create Date</th>
            <th>Due Date</th>
            <th>Closure Date</th>
            <th>Is Enable</th>
            <th>Last Update</th>
            <th>Create By</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event._id}>
              <td>{event.name}</td>
              <td>{event.create_date}</td>
              <td>{event.due_date}</td>
              <td>{event.closure_date}</td>
              <td>{event.is_enable.toString()}</td>
              <td>{event.last_update}</td>
              <td>{event.create_by.full_name}</td>
              <td>{event.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCampaign;
