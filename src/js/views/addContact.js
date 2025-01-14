import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = useContext(Context);
  const [contactData, setContactData] = useState({
    agenda_slug: "alejo-miller",
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact(contactData);
    history.push("/");
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">ADD NEW CONTACT</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">  
          <label>Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={contactData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={contactData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={contactData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={contactData.address}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success form-control">
          Save
        </button>
      </form>
    </div>
  );
};