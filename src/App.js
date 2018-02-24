import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom';
import Home from './Home';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Home}/>
        <Route path="/search" component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
