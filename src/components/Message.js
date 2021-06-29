import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome Visitors'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank you for subscription'
        }) 
    }
    // onclick=()=>{
    //     this.setState({
    //         message:'Thank you for subscription'
    //     })
    // }
    render(){
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>{this.changeMessage()}}>Subscribe</button>
        {/* <button onClick={this.onclick}>Subscribe</button> */}
        </div>
        )
    }
}

export default Message;