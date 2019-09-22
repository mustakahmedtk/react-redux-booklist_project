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