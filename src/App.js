import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';

function App() {
  const [{}, dispatch]= useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('The user is >>>', authUser);

      if (authUser){
        //the user just or was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the use is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
          <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
