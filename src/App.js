import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import HomeDetails from './Component/HomeDetails/HomeDetails';
import AddRentHouse from './Component/AddRentHouse/AddRentHouse';

function App() {
  return (
<Router >
  <Switch>
    <Route path="/homeDetail">
      <HomeDetails></HomeDetails>
    </Route>
    <Route path="/AddRentHouse">
      <AddRentHouse></AddRentHouse>
    </Route>
  </Switch>
</Router>
  );
}

export default App;
