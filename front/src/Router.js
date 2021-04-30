import {Route} from "react-router-dom"
import App from "./App"
import Detail from "./Detail"
import Home from "./Home"
import Qna from "./Qna"

const Router = () =>{
    return (
        <>
          <Route path="/" component={App} exact/>
          <Route path="/detail" component={Detail}/>
          <Route path="/home" component={Home}/>
          <Route path="/qna" component={Qna}/>
        </>
    )
}
export default Router
