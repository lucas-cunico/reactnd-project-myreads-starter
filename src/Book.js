import React from "react";
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";

class Book extends React.Component {
  updateShelf(value) {
    const { book, updateShelf } = this.props;
    updateShelf(book, value);
  }
  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
            <div className="book-top">
            <LazyLoad height={188} width={128}>
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 188,
                  backgroundImage: `url(${book.imageLinks &&
                    book.imageLinks.thumbnail})`
                }}
              />
              </LazyLoad>
              <ShelfChanger
                updateShelf={this.updateShelf.bind(this)}
                value={book.shelf || "none"}
              />
            </div>
          <div className="book-title">{book.title}</div>
          {book.authors &&
            book.authors.map(author => (
              <div className="book-authors" key={author}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired
};
export default Book;
