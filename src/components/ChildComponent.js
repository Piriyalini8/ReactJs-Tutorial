import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* passing reference to a method as props to the child component */}
            {/* <button onClick={props.greetHandler}>Great Parent</button> */}

            {/* pass parameter when calling the parent method  from child  component  */}
            <button onClick={()=>props.greetHandler('child ')}>Great Parent</button>
        </div>
    )
}

export default ChildComponent
