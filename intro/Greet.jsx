import React from 'react'
function Greet(){
    let n1 =10;
    return(
        <React>
            <h4>welcome data {n1}</h4>
            {console.log('hello')}
            <p>{3+2}</p>
            <p>{n1>0?'hello':'not welcomed'}</p>
            {/*
                {
                    if(){
                        
                    }
                } */
            }
        </React>
    )
}
export default Greet;