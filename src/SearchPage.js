import React from 'react'
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class SearchPage extends React.Component {
    state = {
        query: '',
        books : []
    };
    onChange(value) {
        this.setState({query: value.trim()});
        if(value !== ''){
            BooksAPI.search(value).then(books => this.setState({books}));
        }
    }
    render() {
        const {query, books} = this.state;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={query}
                               onChange={e => this.onChange(e.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={books}/>
                </div>
            </div>
        )
    }
}

export default SearchPage
