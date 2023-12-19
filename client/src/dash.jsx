import React, { useState, useEffect } from 'react';
import { fetchData } from './api';

function Dash() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Fetching..");
    const fetchDataFromServer = async () => {
      try {
        const result = await fetchData();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromServer();
  }, []);

  return (
    <>
      <h1>Data from Express Server:</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Mountpoint</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Latitude</th>
            <th>Longitude</th>
            {/* <th>Authorized</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.mountPoint}</td>
              <td>{item.status}</td>
              <td>{item.lastUpdated}</td>
              <td>{item.location.latitude}</td>
              <td>{item.location.longitude}</td>
              {/* <td>{item?.authorized.toString()}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Dash;