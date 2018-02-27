import React from 'react'
import Book from './Book';
import PropTypes from 'prop-types';

class BooksGrid extends React.Component {
    render() {
        const {books, updateShelf} = this.props;
        return (
            <ol className="books-grid">
                {books.map(book => <Book key={book.id} book={book} updateShelf={updateShelf}/>)}
            </ol>
        )
    }
}

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired
};
export default BooksGrid
