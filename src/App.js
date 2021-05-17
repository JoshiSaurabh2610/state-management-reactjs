import Home from "./Components/Home/Home";
import {Link ,Switch, Route} from 'react-router-dom'
import Feed from "./Components/Feed/Feed";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {/* <Counter/> */}
      <Link to="/home">Home</Link><br/>
      <Link to="/feed">Feed</Link>
      <Switch>
        <Route path="/feed" exact component={Feed}/>
        <Route path="/home" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
