
import './App.css';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
           <Switch>
              <Route exact path='/'>
                 <Login/>
              </Route>
              <Route  path='/signup'>
                 <Signup/>
              </Route>
           </Switch>
       </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
