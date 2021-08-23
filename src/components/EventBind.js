import React, { Component } from 'react'
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
        {/* Binding in constructor as oppossed to binding in render method */}
        this.clickHandler=this.clickHandler.bind(this)
    }

    // // method 1 to 3
    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })
    //     console.log(this)
    // }

    // use arrow function as class property
    clickHandler=()=>{
        this.setState({
            message:'Good Bye!'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Not work */}
                {/* <button onClick={this.clickHandler}>Click</button> */}

                {/* bind Handler in render method */}
               {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}

               {/* use arrow function in render method */}
               {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

               {/* Binding in constructor as oppossed to binding in render method */}
               {/* official method line - 10 */}
                <button onClick={this.clickHandler}>Click</button>
                {/* also used for arrow function in class property */}
            </div>
        )
    }
}

export default EventBind
