import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api';
import '../Table/Table.css';
const Admin = () => {
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

  const handleCreate = (mountPoint) => {
    
    console.log(`Creating base station with Mount Point: ${mountPoint}`);
  };

  const handleTerminate = (mountPoint) => {
    
    console.log(`Terminating base station with Mount Point: ${mountPoint}`);
  };

  const getStatusIndicator = (status) => {
    return status === 'ACTIVE' ? (
      <span className="status-indicator status-active">🟢</span>
    ) : (
      <span className="status-indicator status-inactive">🔴</span>
    );
  };

  const tableHeader = ['Mount Point', 'Status', 'Last Updated', 'Latitude', 'Longitude']; // New column order

  return (
    <>
      <div>
        <center>
          <div>
            <table className="table mb-0" style={{ border: '2px solid lightgray', borderRadius: '20px',  boxShadow: 'rgba(149,157,165,0.2) 0px 8px 24px',width:'1200px',textAlign:'center',backgroundColor:'white',height:'300px' }}>
              <thead>
                <tr>
                  {tableHeader.map((header, index) => (
                    <th key={index} className="border-gray-200" style={{ padding: '15px', borderBottom: '1px solid #ddd', minWidth: '100px' }}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((data, dataIndex) => (
                  <tr key={dataIndex}>
                    {tableHeader.map((header, headerIndex) => (
                      <td key={headerIndex} style={{ padding: '15px', borderBottom: '1px solid #ddd', width: 'auto' }}>
                        {header === 'Latitude' ? data.location.latitude.toFixed(4) :
                          header === 'Longitude' ? data.location.longitude.toFixed(4) :
                            header === 'Mount Point' ? data.mountPoint :
                              header === 'Last Updated' ? data.lastUpdated :
                                header === 'Status' ? (
                                  <>
                                    {getStatusIndicator(data.status)}
                                    {data.status}
                                  </>
                                ) : (
                                  data[header.toLowerCase()]
                                )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </>
  );
};

export default Admin;