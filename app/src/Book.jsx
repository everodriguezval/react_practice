// Create a Book component
function Book(props) {
    return (
      <article className="book">
        <div>{props.rating}</div>
        <img src={props.image} alt={props.title} />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
        {props.children}
      </article>
    )
  }

export default Book; 