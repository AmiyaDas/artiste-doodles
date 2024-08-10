function BookShow({ book, onDelete }) {
    const handleDelete = () => {
        onDelete(book.id)
    }
    return (
        <div className="book-show">{book.title}
            <div className="actions">
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;