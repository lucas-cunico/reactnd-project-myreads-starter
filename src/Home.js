import React from 'react'
import {Link} from 'react-router-dom';
import BooksShelf from './BooksShelf';
import PropTypes from 'prop-types';

class Home extends React.Component {

    render() {
        const {currentlyReading, wantToRead, read, updateShelf} = this.props;
        return ( <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BooksShelf title="Currently Reading"
                                books={currentlyReading} updateShelf={updateShelf}/>
                    <BooksShelf title="Want to Read"
                                books={wantToRead}  updateShelf={updateShelf}/>
                    <BooksShelf title="Read"
                                books={read}  updateShelf={updateShelf}/>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

Home.propType = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired
};
export default Home
