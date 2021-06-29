import React from 'react';

// function Greet(){
//     return(
//         <h1>Hello Priya</h1>
//     );
// }

// const Greet=(props)=>{
//     console.log(props);
// return (
//     <div>
// <h1>Hello {props.name} a.k.a {props.heroName}</h1>
// {props.children}
// </div>
// )
// }

// //name export
// export const Greet=()=><h1>Hello Priya</h1>


// //Destructuring in the parameter
// const Greet=({name,heroName,children})=>{
// return (
//     <div>
// <h1>Hello {name} a.k.a {heroName}</h1>
// {children}
// </div>
// )
// }

//Destructuring in the function body
const Greet=(props)=>{
    console.log(props);
    const {name,heroName,children}=props;
return (
    <div>
<h1>Hello {name} a.k.a {heroName}</h1>
{children}
</div>
)
}
export default Greet;