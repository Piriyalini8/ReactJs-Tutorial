import React, { Component } from 'react'


// conditional render
class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false 
        }
    }

    render() {
        //using short circuit operator (also most use)
        return this.state.isLoggedIn && <div>Welcome Priya</div>
        //the expression first evaluated the left hand side of operator
        // if it is true, it also evealuate right hand side 
        // if it is false, right hand side will not be evaluated at all


        // //using turnery operator (most usable => simple,readable)
        // return this.state.isLoggedIn ? ( //evaluatete either true or false
        //     <div>Welcome Priya</div> //return this statement if the condition is true
        // ) : (
        //     <div>Welcome Guest</div>   ////return this statement if the condition is false
        // )

        // //using elemment variable
        // let message
        // if(this.state.isLoggedIn){
        //     message= <div>Welcome Priya</div>
        // } else{
        //     message=<div>Welcome Guest</div>
        // }
        // return(
        //     <div>{message}</div>
        // )


        // // using if else statement
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Priya
        //         </div>
        //     )
        // } else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>
        //             Welcome Priya
        //         </div>
        //         <div>
        //             Welcome Guest
        //         </div>
        //     </div>

        // )
    }
}

export default UserGreeting
