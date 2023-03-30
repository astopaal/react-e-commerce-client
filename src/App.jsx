import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

export default App