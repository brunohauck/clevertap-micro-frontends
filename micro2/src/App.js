import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  
  function start(){
    window.parent.startClevertap()
    //window.parent.loginCleverTap()
  }
  function login(){
    //this function will call onUserLogin function on the javascript
    //start the popUp Functions
    window.parent.clevertap.pushEvent("memedtest")
  }
  return (
    <div>
    <h2>Hello Micro Front 01</h2>
    <button onClick={start}>Start Clevertap SDK</button> 
    <button onClick={login}>Perform on user Login</button> 
   </div>
  );
}

export default App;
