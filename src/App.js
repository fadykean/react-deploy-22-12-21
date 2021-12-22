import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
// import Home from "./components/pages/Home";
import Buy from "./components/pages/buy";
import Login from "./components/pages/login";
import Rent from "./components/pages/rent";
import Shop from "./components/pages/shop";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import Sell from "./components/pages/sell";
import Startforfree from "./components/pages/startforfree";
import Head from "./components/head/Head";
import SecondNavbar from "./components/secondnavbar/secondNavbar";
// import Map from './components/map';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Map from "./components/map/map";
import { useSelector } from "react-redux";

function App() {
  const { isHomePage } = useSelector((state) => state.settingReducer);
  return (
    <div className="App">
      <Router>
        <Navbar />
        {isHomePage && <Head />}
        {!isHomePage && <SecondNavbar />}
        <div className="flex">
          <div className="left">
            <Switch>
              {/* <Route path="/" component={Home} /> */}
              <Route path="/login" component={Login} />
              <Route component={UserDetails} path="/buy/user/:id" />
              <Route component={ProductDetails} path="/buy/product/:id" />
              <Route path="/" exact component={Buy} />
              <Route path="/rent" component={Rent} />
              <Route path="/shop" component={Shop} />
              <Route path="/startforfree" component={Startforfree} />
              <Route path="/sell" component={Sell} />
            </Switch>
          </div>
          <div className="right">
            <Map />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
