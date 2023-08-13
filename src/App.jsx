import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';

import { catalogueData } from './data';

function App() {
  const [catalogue] = useState(catalogueData.products);

  return (
    <main>
      <Header />
      <BookList data={catalogue} />
    </main>
  );
}

export default App;
