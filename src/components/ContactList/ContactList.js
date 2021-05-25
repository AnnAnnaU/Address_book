import React from 'react'
import './ContactList.css';

export const ContactList = ({ contacts, deleteContact, editContactRow, setEditing }) => {

  return (
    <table className="contact_list">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.surname}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>{contact.address}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => editContactRow(contact)}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => {
                    deleteContact(contact.id);
                    setEditing(false);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No contacts yet</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}