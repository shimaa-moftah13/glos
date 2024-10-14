import React, { useState } from 'react';
import axios from 'axios';
import "./styles.css";

const ChangePassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      // Fetch the user data from the JSON server
      const response = await axios.get(`http://localhost:5005/users/1`);
      const user = response.data;

      if (user.password !== currentPassword) {
        setMessage('Current password is incorrect');
        return;
      }

      // Update the user's password
      await axios.patch(`http://localhost:5005/users/1`, {
        password: newPassword,
      });

      setMessage('Password updated successfully');
    } catch (error) {
      setMessage('Error updating password');
    }
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <div className="form-group">
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm New Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button onClick={handlePasswordChange} className='mainButton'>Change Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
