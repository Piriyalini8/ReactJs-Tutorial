import React from 'react';

const Hello =() =>{
    // //with JSX
    // return(
    //     <div>
    //         <h1>Hello Priya With JSX</h1>
    //     </div>
    // )

    //without JSX
    return React.createElement('div',null,React.createElement(
        'h1',null,'Hello Priya Without JSX'
    ))
}

export default Hello;