import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

import Dashboard from './components/dashboard'
import { signIn } from './redux/actions'
import { LoggedVars, AppState } from './types';

const App = () => {
  const dispatch = useDispatch();
  const isLogged: LoggedVars[] = useSelector((state: AppState) => state.loggedReducer)
  return (
    <div className="App">
      {!isLogged ? (<button onClick={() => dispatch(signIn())}>Start</button>) : ''}
      {isLogged && (<Dashboard />)}
    </div>
  );
}

export default App;
