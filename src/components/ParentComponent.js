import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
    }

    // passing reference  without parameter 
    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`)
    // }

    // method with parameter
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
        
        return (
            <div>
           <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
