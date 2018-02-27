import React from 'react'
import BooksGrid from './BooksGrid';
import PropTypes from 'prop-types';

class BooksShelf extends React.Component {
    render() {
        const {title, books, updateShelf} = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BooksGrid books={books} updateShelf={updateShelf}/>
                </div>
            </div>
        )
    }
}

BooksShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};
export default BooksShelf
