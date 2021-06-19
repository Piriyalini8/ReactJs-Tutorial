import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
//default export
// import MyApp from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
//name export- this is the must to export with same name 
// import {Greet} from './components/Greet';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Greet/>
      {/* <MyApp/> */}
      <Welcome/>
    </div>
  );
  }
}

export default App;
