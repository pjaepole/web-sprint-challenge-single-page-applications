import React from "react";
import {Route,Link,Switch} from 'react-router-dom';
import Pizzaform from "./components/pizzaform";
import Home from "./components/Home"
const App = () => {
  return (
      <div>
        <nav>
          <h2>LAMBDA EATS</h2>
          <div>
              <a>Home</a>
              <a>Shop</a>
              <Link to="/">Home</Link>
              <Link id="order-pizza" to="/pizza">link to my form</Link>
              
          </div>
        </nav>
      <Switch>
      <Route path="/pizza">
      <Pizzaform/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
      </Switch>


    
      </div>
  );
};
export default App;
