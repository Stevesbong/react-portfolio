import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ProjectContainer from './components/ProjectContainer';
import Project from './components/Project';
import Header from './components/Header';



function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Header />
        <ProjectContainer />
        <Switch>
          <Route></Route>
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
