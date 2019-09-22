import React from "react";
import {connect} from "react-redux";

import { User } from "../components/User";
import { Main } from "../components/Main";
//import AddBook from './AddBook'
import { addBook } from "../actions/bookActions";

class AddBook extends React.Component {
    constructor(){
        super()
        this.state={
            bookName:null
        }
    }

    render() {
        return (
            <div className="container">
                Add books:
               <input type="text" onChange={(e)=>this.setState({bookName:e.target.value})} />
               <button onClick={(e)=>this.props.addBook(this.state.bookName)}>add book</button>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (booklist) => {
            dispatch(addBook(booklist));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddBook);
