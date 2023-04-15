import './App.css'

// Create a Book component
function Book() {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
// Create a Image, Title and Author components
const Image = () => <h2>Image Placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => <h4>Book Author</h4>;

function App() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

export default App
