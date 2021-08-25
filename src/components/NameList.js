import React from 'react'
import Person from './Person'

//List rendering V17
function NameList() {
    //example for array of String
    // //way 1
    // const names =['Bruce','Cleark','Diana']
    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )

    // //way 2
    // const names =['Bruce','Cleark','Diana']
    // const nameList= names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>

    //Example for Array of objects
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            Age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            Age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            Age: 28,
            skill: 'Vue'
        }
    ]
    // // one way
    // const personList = persons.map(person =>
    //     <h2>
    //         I am {person.name}. I am {person.Age} years old. I know {person.skill}.
    //     </h2>
    // )
    // return <div>{personList}</div>

    
    //recomended way
    const personList = persons.map(person => <Person person={person}/>
    )
    return <div>{personList}</div>
}

export default NameList
