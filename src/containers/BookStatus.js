import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
//import AddBook from './AddBook'
import { addBook } from "../actions/bookActions";

class BookStatus extends React.Component {
    constructor(){
        super()
        this.state={
            bookName:null
        }
    }

    render() {
        return (
            <div className="container">
                available books : {this.props.user.books.map((val,key)=>{
                   return <span>{val},</span>
                })}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
  };

export default connect(mapStateToProps)(BookStatus);
