import React from 'react';
import logo from './logo.svg';
import './index.css';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import Home from "./Home";
import Albums from "./Albums";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
			<div>
			  <h1>Photograph Website</h1>
			  <ul className="header">
				<li><NavLink exact to="/">Home</NavLink></li>
				<li><NavLink to="/Albums">Albums</NavLink></li>
				<li><NavLink to="/Details">Details</NavLink></li>
			  </ul>
				<div className="content">
					<Route exact path="/" component={Home}/>
					<Route path="/Albums" component={Albums}/>
					<Route path="/Details" component={Details}/> 
				</div>
			</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
