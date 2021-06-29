import React from 'react'

function FunctionClick() {
    function ClickHandler(){
        console.log('Button Clicked')
    }
    return (
        <div>
            {/* event handler as function */}
            {/* Always best method */}
            <button onClick={ClickHandler}>Click function</button>

            {/* event handler as function Call */}
            {/* This is not good way Always log at start nothing happen when click */}
            {/* <button onClick={ClickHandler()}>Click</button> */}
        </div>
    )
}

export default FunctionClick
