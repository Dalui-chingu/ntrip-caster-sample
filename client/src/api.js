const API_URL = 'http://localhost:3001'; // Update with your Express server URL

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/api/data`);
  const data = await response.json();
  return data;
};
