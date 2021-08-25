import React from 'react'

// inline css v20
function Inline() {
    const heading= {
        fontSize: '72px',
        color: 'blue'
    }
    return (
        <div>
            {/* v20 css module check */}
            {/* this will work */}
            <h1 className='error'>Error</h1> 
        
            {/* <h1 className={styles.success}>Success</h1> ==> This will not work bc => we referenced the className using Styles 
            variable in App component. so we cannot use it in the children component.
            this will throw error "styles is not defined" */}

            {/* <h1 className={styles.success}>Success</h1> */}
            
           <h1 style={heading}>Inline</h1> 
        </div>
    )
}

export default Inline
