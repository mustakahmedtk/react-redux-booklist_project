/* export function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
    };
}

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
} */

export function addBook(book) {
    return {
        type: "ADD_BOOK",
        payload: book
    }

}
export function deleteBooks(book) {
    return {
        type: "DELETE_BOOK",
        payload: book
    }

}