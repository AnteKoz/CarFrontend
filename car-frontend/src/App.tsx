
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
     fetch('http://localhost:8080/api/v1/cars')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setData(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <div>
        <ul>
          {data.map((car: any, index) => (
                        <tr key={index}>
                        <td>{car.brand}</td>
                        <td>{car.code}</td>
                    </tr>
          ))}
        </ul>
    </div>
  );
};
export default App;