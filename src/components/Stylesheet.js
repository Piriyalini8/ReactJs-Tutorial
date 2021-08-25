import React from 'react'
import './myStyles.css'
 
//Styling and css v20
function Stylesheet(props) {
    let className=props.primary ? 'primary' :''
    //reading value of primary props and if it is true we set it to string primary or set it to empty string
    return (
        <div>
            <h1 className={`${className} font-xl`}>Style Sheet</h1>
        </div>
    )
}

export default Stylesheet
