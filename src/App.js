import './css/style.css';
import PersonaCardContainer from './components/PersonaCardContainer';
import { Route, HashRouter, Switch } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <h1 style={{ textAlign: 'center' }}>
                Persona 3 Portable Fusion Calculator
              </h1>
              <PersonaCardContainer />
            </Route>
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
