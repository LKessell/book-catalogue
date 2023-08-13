import BookCard from '../BookCard/BookCard';

function BookList({ data }) {
  const bookCards = data.map((book) => {
    return <BookCard book={book} key={book.ean} />;
  });

  return <ul>{bookCards}</ul>;
}

export default BookList;
