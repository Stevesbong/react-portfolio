import React, { useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ProjectContainer from './components/ProjectContainer';
import Header from './components/Header';
import About from './components/About';
import ProjectDetail from './components/ProjectDetail';
import { AnimatePresence } from 'framer-motion';


function App() {
  
  const [ toggle, setToggle ] = useState(true);

  return (
    <BrowserRouter>

      <div className="App">

        <Header toggle={toggle} />
          <Switch>
            <Route exact path='/'>
              <ProjectContainer left= {toggle} toggle={ ( toggle ) => setToggle( toggle ) } />
            </Route>
            <Route exact path='/about' component={About} />
            <Route exact path='/project/:id' component={ProjectDetail} />
          </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
