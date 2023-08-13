import { useState } from 'react';

import './BookCard.css';
import imagePlaceholder from '../../assets/icons8-image-64.png';

function BookCard({ book }) {
  const [imgSrc, setImgSrc] = useState(book.images ? book.images[0].uri : imagePlaceholder);

  return (
    <li className="card-wrapper">
      <div>
        <h2>
          {book.name}
          <br />
          <span>{book.subName}</span>
        </h2>
        <h3>{book.author}</h3>
      </div>
      <img className="jacket-cover" src={imgSrc} onError={() => setImgSrc(imagePlaceholder)} />
    </li>
  );
}

export default BookCard;
