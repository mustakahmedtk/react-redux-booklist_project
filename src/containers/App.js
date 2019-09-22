import React from "react";
import {connect} from "react-redux";
import AddBook from './AddBook'
import { BookList } from "../components/BookList";
import BookStatus from './BookStatus'
import { deleteBooks } from "../actions/bookActions";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <AddBook/>
                <hr/>
                <BookList booklist={this.props.user.books} deleteBook={(book)=>this.props.deleteBooks(book)}/>
                <hr/>
                <BookStatus/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBooks: (book) => {
            dispatch(deleteBooks(book));
        }
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(App);
