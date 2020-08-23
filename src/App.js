import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ProjectContainer from './components/ProjectContainer';
import Header from './components/Header';



function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Header />
        
        <Switch>
          <Route exact path='/' render={ () => <Redirect to='/portfolio' /> } />
          <Route exact path='/portfolio' render={ ()=> <ProjectContainer /> } />
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
