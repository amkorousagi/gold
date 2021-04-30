import {Route} from "react-router-dom"
import App from "./App"
import Detail from "./Detail"
import Home from "./Home"

const Router = () =>{
    return (
        <>
          <Route path="/" component={App} exact/>
          <Route path="/detail" component={Detail}/>
          <Route path="/home" component={Home}/>
        </>
    )
}
export default Router
