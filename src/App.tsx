
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import * as React from 'react';

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
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Brands</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow
              key={row.brand}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.brand}
              </TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default App;