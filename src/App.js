
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import  FilteredProducts  from "./Pages/FilteredProducts/FilteredProducts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <FilteredProducts />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App

