import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import ClassClick from './components/ClassClick';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import FunctionClick from './components/FunctionClick';
//default export
// import MyApp from './components/Greet';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Welcome from './components/Welcome';
//name export- this is the must to export with same name 
// import {Greet} from './components/Greet';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children of Props</p>
      </Greet>
      <Greet name="Clark" heroName="Super man">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder woman"/> */}
      {/* <MyApp/> */}
      {/* <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Super man"/>
      <Welcome name="Diana" heroName="Wonder woman"/> */}
      {/* <Hello/> */}

      {/* <Message/> */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      <UserGreeting/>
    </div>
  );
  }
}

export default App;
