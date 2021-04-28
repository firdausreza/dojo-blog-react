import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const hist = useHistory();

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      hist.push("/");
    })
  }

  return ( 
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div className="blog-body">{ blog.body }</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      ) }
    </div>
  );
}

export default BlogDetail;