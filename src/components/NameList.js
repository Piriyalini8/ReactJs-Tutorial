import React from 'react'
import Person from './Person'

//List rendering V17, Lists and keys v18
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
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         Age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         Age: 25,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         Age: 28,
    //         skill: 'Vue'
    //     }
    // ]
    // // // one way
    // // const personList = persons.map(person =>
    // //     <h2>
    // //         I am {person.name}. I am {person.Age} years old. I know {person.skill}.
    // //     </h2>
    // // )
    // // return <div>{personList}</div>

    
    // //recomended way
    // const personList = persons.map(person => <Person key={person.id} person={person}/>
    // )
    // return <div>{personList}</div>


    //Index as Key Anti-pattern v19
    const names =['Bruce','Cleark','Diana','Bruce']
    // const nameList= names.map(name => <h2 key={name}>{name}</h2>)  //wrong key value
    // //key props has to be unique
    // //Keys should be unique so that components maintain their identity across updates. 
    // //Non-unique keys may cause children to be duplicated and/or omitted
    // return <div>{nameList}</div>

    //correct key value 
    const nameList= names.map((name,index) => <h2 key={index}>{index} {name}</h2>) //use index as key
    return <div>{nameList}</div>
}

export default NameList
