import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ProjectContainer from './components/ProjectContainer';
import Header from './components/Header';


function App() {
  const [ toggle, setToggle ] = useState(true);

  return (
    <BrowserRouter>

      <div className="App">

        <Header toggle={toggle} />
        
        <Switch>
          <Route exact path='/' render={ () => <Redirect to='/portfolio' /> } />
          <Route exact path='/portfolio' render={ ()=> <ProjectContainer left= {toggle} toggle={ ( toggle ) => setToggle( toggle ) } /> } />
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
