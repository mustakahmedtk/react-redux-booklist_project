const userReducer = (state = {
    name: "Max",
    age: 27,
    books:[]
}, action) => {
    switch (action.type) {
      /*   case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break; */
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

export default userReducer;