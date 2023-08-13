import PropTypes from 'prop-types';

function BookList({ data }) {
  const bookCards = data.map((book) => {
    return <li key={book.ean}>{book.name}</li>;
  });

  return <ul>{bookCards}</ul>;
}

BookList.propTypes = {
  data: PropTypes.array,
};

export default BookList;
