import React from 'react'
import './App.css'
import {Route} from 'react-router-dom';
import Home from './Home';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
    state = {
        books: [],
        query: '',
        searchBooks: []
    };

    updateShelf(book, value) {
        BooksAPI.update(book, value).then(() => {
            book.shelf = value;
            const {books} = this.state;
            const index = books.findIndex(o => o.id === book.id);
            if (index !== -1) {
                books[index] = book
            } else {
                books.push(book)
            }
            this.setState({books});
        });
    }

    onSearch(value) {
        this.setState({query: value.trim()});
        if (value !== '') {
            BooksAPI.search(value).then((searchBooks) => {
                searchBooks = searchBooks.map(item1 => {
                    return Object.assign(item1, this.state.books.find(item2 => {
                        return item2 && item1.id === item2.id
                    }))
                });
                this.setState({searchBooks})
            });
        } else {
            this.setState({searchBooks: []});
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        });
    }

    render() {
        const {books, query, searchBooks} = this.state;
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <Home currentlyReading={books.filter(book => book.shelf === "currentlyReading")}
                          wantToRead={books.filter(book => book.shelf === "wantToRead")}
                          read={books.filter(book => book.shelf === "read")} updateShelf={this.updateShelf.bind(this)}/>
                )}/>
                <Route path="/search" render={() => (
                    <SearchPage updateShelf={this.updateShelf.bind(this)} books={searchBooks} query={query}
                                onSearch={e => this.onSearch(e.target.value)}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
