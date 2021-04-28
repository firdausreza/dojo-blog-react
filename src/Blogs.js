import { Link } from "react-router-dom";

const Blogs = ({ blogs, title }) => {

  return ( 
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>{ blog.body }</p>
            <p><i>Written by</i> <b>{ blog.author }</b></p>
            {/* <button>Delete</button> */}
          </Link>
        </div>
      ))}
    </div>
  );

}

export default Blogs;