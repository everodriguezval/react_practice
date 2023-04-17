import './App.css'

// Book array which contains our book objects
const bookArray = [
  {
  image: 'https://m.media-amazon.com/images/I/51zB8uNBS5L._SY291_BO1,204,203,200_QL40_ML2_.jpg',
  title: 'Bored of Lunch: The Healthy Air Fryer Book',
  author:'Nathan Anthony',
  id: 1
  },
  {
  image: 'https://m.media-amazon.com/images/I/512cU+NhyAL._SY344_BO1,204,203,200_.jpg',
  title: 'Lessons in Chemistry',
  author: ' Bonnie Garmus',
  id: 2
  }
];

function App() {

  const getBook = (id) => {
    const book = bookArray.find(book => book.id === id);
    console.log(book);
  }
  
  return (
  <section className="booklist">
    <EventExample />
    {bookArray.map((book) => {
      const { image, title, author, id } = book;
      return (
        <Book key={id} id={id} image={image} title={title} author={author} getBook={getBook}/>
      );
    })}
  </section>
  )
}

// Create a Book component
function Book(props) {
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
      <button onClick={() => props.getBook(props.id)}>Get Book</button>
      {props.children}
    </article>
  )
}

const EventExample = () => {
  const handleFormInput = (e) => {
    console.log('input onchange event fired!', e.target.value, e.target.name)
  }

  const handleButtonClick = (e) => {
    console.log('click event fired!', e.target)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submited!', e)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2>Some Form</h2>
        <input 
        type="text"
        name="example"
        onChange={(e) => {e.target.value}}
        style={{margin: "1rem 0"}} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleButtonClick}>Click Me!</button>
    </section>
  )
}

export default App
