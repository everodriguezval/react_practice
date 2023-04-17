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

export default EventExample; 