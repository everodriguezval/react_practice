import './App.css'

// Create a Book component
function Book() {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}
// Create a Image, Title and Author components
const Image = () => <img src="https://m.media-amazon.com/images/I/51zB8uNBS5L._SY291_BO1,204,203,200_QL40_ML2_.jpg" alt="Bored of Lunch: The Healthy Air Fryer Book by Nathan Anthony"/>;
const Title = () => <h2>Bored of Lunch: The Healthy Air Fryer Book</h2>;
const Author = () => <h4>Nathan Anthony</h4>;

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
