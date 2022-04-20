import type { NextPage } from 'next'
import Template from '../components/template'
import styles from '../styles/Home.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
  'a','b','c','d','e','f','g'
]


const Results : NextPage = () => {
  return (
    <div className={styles.container}>
      <Template title="Resultados del examen">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                rows.map( (row, index) => (
                  <TableRow key={index} >
                    <TableCell>{row}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
      </Template>
    </div>
  )
}


export default Results