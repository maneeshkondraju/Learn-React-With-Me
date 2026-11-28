import React from "react";

function Display({user}){
    return(
        <>
        <div className="row3">
            <div className="card">
                <div className="card-body">
                    <h5>Name:{user.name}</h5>
                    <p>Designation: {user.desgn}</p>
                    <button className="btn btn-primary btn-sm">Contact</button>

                </div>
            </div>
        </div>
        </>
    )
}
export default Display;