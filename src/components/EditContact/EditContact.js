import React, { useState, useEffect } from 'react';
import './EditContact.css';


export const EditContact = ({ setEditing, currentContact, updateContact }) => {
  const [contact, setContact] = useState(currentContact)

  useEffect(
    () => {
      setContact(currentContact)
    },
    [currentContact]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!contact.name || !contact.surname || !contact.phone || !contact.email || !contact.address) {
      return;
    }

    updateContact(contact.id, contact)
  }

  return (
    <form
      className="air"
      onSubmit={handleSubmit}
    >
      <div className="form-inner">
        <div className="form-row">
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
      </div>
      <div className="edit-button">
        <button>Update user</button>
        <button
          onClick={() => setEditing(false)}
        >
          Cancel
      </button>
      </div>
    </form>
  )
}