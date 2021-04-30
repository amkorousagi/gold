import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { RecoilRoot } from "recoil"
import { BrowserRouter, Switch } from "react-router-dom"
import Router from "./Router"

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Switch>
        <Router />
      </Switch>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("root")
)

// #FAD0C9 pink
// #6E6E6D gray
