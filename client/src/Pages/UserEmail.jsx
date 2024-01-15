import React from 'react';

const UserData = [
  { username: 'user1', email: 'user1@example.com' },
  { username: 'user2', email: 'user2@example.com' },
  { username: 'user3', email: 'user3@example.com' },
  // Add more sample data here if needed
];

const UserTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {UserData.map((data, index) => (
          <tr key={index}>
            <td>{data.username}</td>
            <td>{data.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;