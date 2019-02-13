import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

// <Route exact path='/' component={ TicketList }/>

function App(){
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: Helvetica;
        }

      `}</style>
      <Header/>
      <Switch>

      </Switch>

    </div>
  );
}

export default App;
