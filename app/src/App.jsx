import './App.css'

const bookOne = {
  image: 'https://m.media-amazon.com/images/I/51zB8uNBS5L._SY291_BO1,204,203,200_QL40_ML2_.jpg',
  title: 'Bored of Lunch: The Healthy Air Fryer Book',
  author:'Nathan Anthony',
};

const bookTwo = {
  image: 'https://m.media-amazon.com/images/I/512cU+NhyAL._SY344_BO1,204,203,200_.jpg',
  title: 'Lessons in Chemistry',
  author: ' Bonnie Garmus',
};

// Create a Book component
function Book(props) {
  console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

function App() {
  return (
    <section className="booklist">
      <Book image={bookOne.image} title={bookOne.title} author={bookOne.author} />
      <Book  image={bookTwo.image} title={bookTwo.title} author={bookTwo.author}/>
    </section>
  )
}

export default App
