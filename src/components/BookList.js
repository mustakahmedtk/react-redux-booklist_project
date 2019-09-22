import React from "react";

export const BookList = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>booklist</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                  <ul>
                     {props.booklist.length>0? props.booklist.map((val,key)=>{
                         return (
                             <>
                             <li key={key}>{val}</li>
                             <button className="btn" onClick={()=>props.deleteBook(val)}>deleteThisBook</button>
                             </>
                         )
                     }):'please add books'}
                  </ul>
                </div>
            </div>
        </div>
    );
};