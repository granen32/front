import React from 'react'
const Wrapper = ({children}) => {
    const borderStyle ={
        border: '2px solid black',
        padding: '16px'
    }
    return (
        <div style={borderStyle}>
            {children}
        </div>
    )
}

export default Wrapper
