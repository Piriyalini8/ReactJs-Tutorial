import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyApp from './components/Greet';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';  //import css module
import Form from './components/Form';


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
      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      <Form/>
    </div>
  );
  }
}

export default App;
