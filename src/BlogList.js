import { Link } from 'react-router-dom'

const BlogList = ({ blogs, title }) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className='blog-preview'>
          <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default BlogList
