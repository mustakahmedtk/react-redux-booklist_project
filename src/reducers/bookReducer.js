const bookReducer = (state = {
    books:[]
}, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            state = {
                ...state,
                books: [...state.books, action.payload]
            };
            break;
        case "DELETE_BOOK":
            state = {
                ...state,
                books: [...state.books.filter((bookName)=>bookName!==action.payload) ]
            };
            break;
    }
    return state;
};

export default bookReducer;