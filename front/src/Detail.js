import { React } from "react"
import Header from "./Header"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import neck from "./neck.jpeg"
import Rating from "@material-ui/lab/Rating"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Detail = ({ path, location }) => {
  return (
    <>
      <Header />
      <Divider />
      <Grid container>
        <Grid item lg='8' md='8' sm='8' xl='8' xs='8'>
          <img src={neck} width='100%' />
        </Grid>
        <Grid item lg='4' md='4' sm='4' xl='4' xs='4'>
          <p>결제 정보가 들어갈 곳</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg='12' md='12' sm='12' xl='12' xs='12'>
          <p>추가 이미지가 들어갈 곳</p>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg='12' md='12' sm='12' xl='12' xs='12'>
          <h2 style={{ textAlign: "center" }}>후기</h2>
        </Grid>
        <Grid item lg='12' md='12' sm='12' xl='12' xs='12'>
          <Rating readOnly defaultValue={5} />
        </Grid>
        <Grid item lg='12' md='12' sm='12' xl='12' xs='12'>
          <Table size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                <TableCell align='right'>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
        <Grid item lg='12' md='12' sm='12' xl='12' xs='12'>
          <h2 style={{ textAlign: "center" }}>질문</h2>
        </Grid>
        <Grid item lg='12' md='12' sm='12' xl='12' xs='12'>
        <Table size='small' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                <TableCell align='right'>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  )
}
export default Detail
