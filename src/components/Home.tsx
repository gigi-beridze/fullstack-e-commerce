import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the PHP script using Axios
    axios.get('http://localhost/api/test.php') // Change the URL to match your server configuration
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const jsonData = JSON.parse(String(data).substring(String(data).indexOf('[')));

  return (
    <div className="home">
        <div>
      <h1>Data from MySQL Table</h1>
      <ul>
        {jsonData}
      </ul>
    </div>
    </div>
  )
}

export default Home
