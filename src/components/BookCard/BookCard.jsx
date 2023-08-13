import { useState } from 'react';

import './BookCard.css';
import imagePlaceholder from '../../assets/icons8-image-64.png';

function BookCard({ book }) {
  const [imgSrc, setImgSrc] = useState(book.images ? book.images[0].uri : imagePlaceholder);

  function formatAuthor(author) {
    return author.split(',').reverse().join(' ');
  }

  return (
    <li className="card-wrapper">
      <div className="info-wrapper">
        <h2>
          {book.name || 'Title unavailable'}
          {book.subName && (
            <>
              <br />
              <span>{book.subName}</span>
            </>
          )}
        </h2>
        {book.author ? <p>{formatAuthor(book.author)}</p> : <p>Author unavailable</p>}
        {book.pubDate && <p>{book.pubDate.slice(0, 4)}</p>}
        {book.category && <p>{book.category}</p>}
        {book.format && <p>{book.format}</p>}
      </div>
      <div className="jacket-wrapper">
        <img className="jacket-cover" src={imgSrc} onError={() => setImgSrc(imagePlaceholder)} />
        {imgSrc === imagePlaceholder && <p>Cover unavailable</p>}
      </div>
    </li>
  );
}

export default BookCard;
