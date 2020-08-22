import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/Signin' component={SignIn} />
          <Route path='/Signup' component={SignUp} />
          <Route path='/createproject' component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
