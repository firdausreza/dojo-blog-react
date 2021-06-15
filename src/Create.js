import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState('mario');
  const [isPending, setPending] = useState(false);
  const hist = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(!isPending);

    const blog = { title, body, author };

    fetch('https://json-dojo-blog.herokuapp.com/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    .then(() => [
      setPending(false),
      hist.push("/")
    ])
  }

  return ( 
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea 
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        { !isPending && <button>Add blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
} 

export default Create;