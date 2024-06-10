import React, { useState } from 'react';
import Navbar from '../components/NavBar';

export default function UsersPage ()  {
  const [showModal, setShowModal] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [users, setUsers] = useState([]);

  const handleCreateUser = () => {
    if (newUserName.trim() && newUserEmail.trim()) {
      setUsers([...users, { name: newUserName, email: newUserEmail }]);
      setNewUserName('');
      setNewUserEmail('');
      setShowModal(false);
    }
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
    <Navbar/>
      <div className="level">
        <div className="level-left">
          <h1 className="title">Users</h1>
        </div>
        <div className="level-right">
          <button className="button is-primary" onClick={() => setShowModal(true)}>
            Create New User
          </button>
        </div>
      </div>

      <div className="box">
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="button is-danger" onClick={() => handleDeleteUser(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`modal ${showModal ? 'is-active' : ''}`}>
        <div className="modal-background" onClick={() => setShowModal(false)}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Create New User</p>
            <button className="delete" aria-label="close" onClick={() => setShowModal(false)}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="User Name"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Email Address"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={handleCreateUser}>
              Create
            </button>
            <button className="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};
