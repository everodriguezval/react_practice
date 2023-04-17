import './App.css'

import EventExample from './EventExample';
import bookArray from './books';
import Book from './Book';

function App() {
  return (
  <section className="booklist">
    <EventExample />
    {bookArray.map((book) => {
      const { image, title, author, id, rating } = book;
      return (
        <Book key={id} id={id} image={image} title={title} author={author} rating={rating}/>
      );
    })}
  </section>
  )
}

export default App;
