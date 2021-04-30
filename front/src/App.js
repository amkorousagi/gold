import './App.css';
import Header from "./Header"
import Card from "./Card"
import Divider from '@material-ui/core/Divider';
import queryString from "query-string";

function App({match, location}) {
  console.log(match, location)
  const query = queryString.parse(location.search);
  console.log(query.type)
  return (
    <div className="App">
      <Header/>
      <Divider/>
      <Card/>
    </div>
  );
}

export default App;
