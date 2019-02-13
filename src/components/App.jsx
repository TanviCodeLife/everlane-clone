import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Hello, world</h1>

      <Switch>
        <Route exact path='/' component={ ( ()=>{'Routing works!';} )() } /> 
      </Switch>

      <style jsx global>{`
          body{
            font-family: sans-serif;
          }
        `}</style>
    </div>
  );
}

export default App;