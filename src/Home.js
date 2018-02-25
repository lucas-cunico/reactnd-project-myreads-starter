import React from 'react'
import {Link} from 'react-router-dom';
import BooksShelf from './BooksShelf';
import * as BooksAPI from './BooksAPI';

class Home extends React.Component {
    state = {
        books : []
    };
    componentDidMount(){
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        });
    }
    render() {
        const {books} = this.state;
        return ( <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BooksShelf title="Currently Reading" books={books.length ? books.filter(book => book.shelf === "currentlyReading") : books}/>
                    <BooksShelf title="Want to Read" books={books.length ? books.filter(book => book.shelf === "wantToRead") : books}/>
                    <BooksShelf title="Read" books={books.length ? books.filter(book => book.shelf === "read") : books}/>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Home
