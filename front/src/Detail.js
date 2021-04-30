import { React } from "react"
import Header from "./Header"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import Rating from "@material-ui/lab/Rating"
import "./Detail.css"

import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"

import neck from "./neck.jpeg"
import ring from "./ring.jpg"
import bracelet from "./bracelet.jpeg"
import queryString from "query-string"
import logo from "./logo.png"

function createData(no, title, state, askDate, responseDate) {
  return { no, title, state, askDate, responseDate }
}
const rows = [
  createData(1, "언제오나요?", "답변완료", "2021.4.5", "2021.4.6"),
  createData(2, "언제오나요?", "답변완료", "2021.4.6", "2021.4.7"),
  createData(3, "언제오나요?", "답변완료", "2021.4.7", "2021.4.8"),
  createData(4, "언제오나요?", "대기", "2021.4.8", ""),
  createData(5, "언제오나요?", "대기", "2021.4.9", ""),
]
function createReview(score, date, text) {
  return { score, date, text }
}
const reviews = [
  createReview(4.5, "2021.4.15", "즐겁다"),
  createReview(4.8, "2021.4.16", "즐겁다"),
  createReview(5.0, "2021.4.12", "즐겁다"),
  createReview(4.0, "2021.4.17", "즐겁다"),
]

const Detail = ({ path, location }) => {
  const query = queryString.parse(location.search)
  console.log(query.type)
  let image
  if (query.type == "necklace") {
    image = neck
  } else if (query.type == "ring") {
    image = ring
  } else {
    image = bracelet
  }
  return (
    <div className='Detail'>
      <Header />
      <Divider />
      <Grid container>
        <Grid item lg='8' md='8' sm='8' xl='8' xs='8'>
          <img src={image} width='100%' />
        </Grid>
        <Grid item lg='4' md='4' sm='4' xl='4' xs='4'>
          <h2>{query.type}</h2>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item lg='12' md='12' sm='12' xl='12' xs='12'>
          <img src={logo} />
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
                <TableCell>
                  <p>점수</p>
                </TableCell>
                <TableCell align='right'>
                  <p>평가일</p>
                </TableCell>
                <TableCell align='right'>
                  <p>구매평</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.map((row) => (
                <TableRow key={row.score}>
                  <TableCell component='th' scope='row'>
                    <Rating readOnly defaultValue={row.score} />
                  </TableCell>
                  <TableCell align='right'>
                    <p>{row.date}</p>
                  </TableCell>
                  <TableCell align='right'>
                    <p>{row.text}</p>
                  </TableCell>
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
                <TableCell>
                  <p>No</p>
                </TableCell>
                <TableCell align='right'>
                  <p>제목</p>
                </TableCell>
                <TableCell align='right'>
                  <p>상태</p>
                </TableCell>
                <TableCell align='right'>
                  <p>질문일시</p>
                </TableCell>
                <TableCell align='right'>
                  <p>답변일시</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.no}>
                  <TableCell component='th' scope='row'>
                    <p>{row.no}</p>
                  </TableCell>
                  <TableCell align='right'>
                    <p>{row.title}</p>
                  </TableCell>
                  <TableCell align='right'>
                    <p>{row.state}</p>
                  </TableCell>
                  <TableCell align='right'>
                    <p>{row.askDate}</p>
                  </TableCell>
                  <TableCell align='right'>
                    <p>{row.responseDate}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </div>
  )
}
export default Detail
