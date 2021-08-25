import React from 'react'
//List rendering recommended way (Refactor jsx code into separate component v17)
function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name}. I am {person.Age} years old. I know {person.skill}.
            </h2>
        </div>
    )
}

export default Person
