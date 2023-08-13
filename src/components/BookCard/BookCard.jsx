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
      <div>
        <h2>
          {book.name}
          <br />
          <span>{book.subName}</span>
        </h2>
        <p>{book.author ? formatAuthor(book.author) : 'Author unavailable'}</p>
        <p>{book.pubDate?.slice(0, 4)}</p>
        <p>{book.category}</p>
        <p>{book.format}</p>
      </div>
      <img className="jacket-cover" src={imgSrc} onError={() => setImgSrc(imagePlaceholder)} />
    </li>
  );
}

export default BookCard;
