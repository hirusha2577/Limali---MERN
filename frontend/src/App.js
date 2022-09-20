import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './screens/Home';
import Vehicle from './screens/Vehicle-add';
import VehicleList from './screens/Vehicle-list';
import VehicleEdit from './screens/Vehicle-edit';
import Order from './screens/Order';
import Report from './screens/Report';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/vehicle-add" component={Vehicle}/>
      <Route exact path="/vehicle-list" component={VehicleList}/>
      <Route exact path="/vehicle-edit/:id" component={VehicleEdit}/>
      <Route exact path="/order" component={Order}/>
      <Route exact path="/report" component={Report}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;


