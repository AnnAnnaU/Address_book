import React, { useState } from 'react';
// import { useForm, Controller } from "react-hook-form";
// import { FormControl, Button, TextField, FormHelperText } from '@material-ui/core';
import './AddContact.css';

export const AddContact = ({ addContact, initialFormState }) => {
  const [contact, setContact] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setContact({ ...contact, [name]: value })
  }

  const handleSubmita = (event) => {
    event.preventDefault()
    if (!contact.name || !contact.surname || !contact.phone || !contact.email || !contact.address) {
      return;
    }
    addContact(contact);
    setContact(initialFormState);
  }

  return (
    <form
      className="air"
      onSubmit={handleSubmita}>
      <div className="form-inner">
        <div className="form-row">
          <label>First name</label>
          <input
            required
            minlength="2"
            maxlength="20"
            type="text"
            name="name"
            value={contact.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Last name</label>
          <input
            required
            minlength="2"
            maxlength="20"
            type="text"
            name="surname"
            value={contact.surname}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <input
            required
            minlength="10"
            maxlength="20"
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input
            required
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Address</label>
          <input
            required
            minlength="2"
            maxlength="100"
            type="text"
            name="address"
            value={contact.address}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="add-button">
        <button>Add new contact</button>
      </div>
    </form>
  )
}