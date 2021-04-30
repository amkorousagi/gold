import React from "react"
import Grid from "@material-ui/core/Grid"
import "./Header.css"
import {useHistory} from "react-router-dom"

const Header = (props) => {
  const his = useHistory();
  //select category
  return (
    <div className="Header">
      <Grid container justify='center' alignItems='center'>
        <Grid item lg='3' md='3' sm='3' xl='3' xs='3' onClick={()=>{his.push("/home")}}>
          <h1 >
            Gloden Life
          </h1>
        </Grid>
      </Grid>
      <Grid container fluid={true}>
        <Grid lg='3' md='3' sm='3' xl='3' xs='3'>
          <a href='/?type=necklace'>목걸이</a>
        </Grid>
        
        <Grid item lg='3' md='3' sm='3' xl='3' xs='3'>
          <a href='/?type=ring'>반지</a>
        </Grid>
        
        <Grid item lg='3' md='3' sm='3' xl='3' xs='3'>
          <a href='/?type=bracelet'>팔찌</a>
        </Grid>
        <Grid item lg='3' md='3' sm='3' xl='3' xs='3'>
          <a href='/qna'>Q&A</a>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header
