import React from 'react'

function Button({children,color}){
    return(
        <>
        <button className={`btn btn-${color} btn-sm mx-2`} >{children}

        </button>
        </>
    )
}
export default Button;