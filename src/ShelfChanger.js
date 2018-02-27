import React from 'react'
import PropTypes from 'prop-types';

class ShelfChanger extends React.Component {
    render() {
        const {value, updateShelf} = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={e => updateShelf(e.target.value)} value={value}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

ShelfChanger.propTypes = {
    updateShelf: PropTypes.func.isRequired
};
export default ShelfChanger
