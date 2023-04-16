import './App.css'

// Create a Book component
function Book() {
  const image = "https://m.media-amazon.com/images/I/51zB8uNBS5L._SY291_BO1,204,203,200_QL40_ML2_.jpg";
  const title = "Bored of Lunch: The Healthy Air Fryer Book";
  const author = "Nathan Anthony";
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>     
    </article>
  )
}

function App() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

export default App
