import React, { useState, useEffect } from 'react';
import './User.css';

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/currents'); // Update with your server URL
        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <center>
    <div style={{minWidth:'100%'}}>
      {/* {JSON.stringify(data)} */}<h4>Real Time Base Station Switching</h4>
      <table style={{border:'2px solid gray',borderRadius:'10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
        <thead>
        <tr>
            <th style={{paddingLeft:'20px'}} >Base Station Name</th>
            <th style={{paddingLeft:'20px'}} >User Name</th>
            <th style={{paddingLeft:'20px'}} >Latitude</th>
            <th style={{paddingLeft:'20px'}} >Longitude</th>
            <th style={{paddingLeft:'50px'}} >Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((baseStation, index) => (
            <tr key={index}>
              <td style={{paddingLeft:'60px'}} >{baseStation.baseStationName}</td>
              <td  style={{paddingLeft:'40px'}} >{baseStation.users[0]?.name}</td>
              <td style={{paddingLeft:'20px'}} >{baseStation.users[0]?.latitude}</td>
              <td style={{paddingLeft:'50px'}} >{baseStation.users[0]?.longitude}</td>
              <td>{new Date().toISOString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
  );
};

export default User;