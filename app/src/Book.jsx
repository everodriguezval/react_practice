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

export default Book; 