import React from "react";

export const Main = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>The Main Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    type a name:
                    <input onChange={(e) => props.changeUsername(e.target.value)}/>
                </div>
            </div>
        </div>
    );
};