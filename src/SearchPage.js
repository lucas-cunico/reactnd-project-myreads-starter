import React from 'react'
import {Link} from 'react-router-dom';
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types';

class SearchPage extends React.Component {

    render() {
        const {query, books, updateShelf, onSearch} = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={query}
                               onChange={onSearch}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={books} updateShelf={updateShelf}/>
                </div>
            </div>
        )
    }
}

SearchPage.propTypes = {
    query: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
};
export default SearchPage
