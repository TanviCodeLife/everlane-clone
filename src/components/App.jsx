import React from 'react';
import Header from './Header';
import Showcase from './Showcase';
import { Switch, Route } from 'react-router-dom';
import Shop from './Shop';

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
        <Route exact path='/' component={ Showcase }/>
        <Route path='/shop/:category' component={ Shop } />

      </Switch>


    </div>
  );
}

export default App;
