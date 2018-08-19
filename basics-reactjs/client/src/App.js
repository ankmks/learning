import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Order from "./containers/order/Order";
import Products from "./containers/product/Product";
import Index from "./containers/Index";
import NotFound from "./containers/error/NotFound";

class App extends Component {

  // renderRouter(){
  //   return(
  //     <Switch>
  //         <Route exact path = "/" component={Home} />
  //         <Route path = "/about" component={About} />
  //     </Switch>
  //   );
  // }

  render() {
    return (
      <BrowserRouter>
        <Switch>
        {/* //Home up stare */}
          <Route exact path = "/" component={Home} /> 
          <Route path = "/about" component={About} />
          <Route path = "/orders" component={Order} />
          <Route exact path = "/products" component={Products} />
          <Route path ="/index" component={Index} />

          <Route component={NotFound}/>
          
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
