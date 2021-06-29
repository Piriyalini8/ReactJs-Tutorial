import React,{Component} from 'react';

// class Welcome extends Component{
//     render(){
//         // return <h1>Hello Priya, Class component</h1>
//         return <h1>Hello {this.props.name} a.k.a {this.props.heroName}</h1>
//     }
// }

//Destructoring in render metod
class Welcome extends Component{
    render(){
        const {name,heroName}=this.props;
        return <h1>Hello {name} a.k.a {heroName}</h1>
    }
}

export default Welcome;