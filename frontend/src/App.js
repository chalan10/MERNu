import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login.js';
import Home from './components/Home.js';
import './App.css';

function App() {
   const [message, setmessage] = useState(0);

  useEffect(() => {
	fetch('/hello/').then(res => res.json()).then(data => {
	  setmessage(data.msg)
	});
  }, []);

  return (
	<Router>
	  <div>
	  	{message}
	  </div>
	  <div>
	  	<nav>
	  	  <ul>
	  	    <li>
	  	      <Link to="/">Home</Link>
	  	    </li>
	  	    <li>
	  	  	  <Link to="/login/">Login</Link>
	  	    </li>
	      </ul>
	    </nav>
	    <Switch>
	      <Route path="/login/">
	        <Login />
	      </Route>
	      <Route path="/">
	        <Home />
	      </Route>
	    </Switch>
	  </div>
	</Router>
  );
}

export default App;
