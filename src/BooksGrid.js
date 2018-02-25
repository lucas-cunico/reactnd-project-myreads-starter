import React from 'react'
import Book from './Book';
import PropTypes from 'prop-types';

class BooksGrid extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <ol className="books-grid">
                {books.map(book => <Book key={book.id} book={book}/>)}
            </ol>
        )
    }
}
BooksGrid.propTypes = {
    books: PropTypes.array.isRequired
};
export default BooksGrid
