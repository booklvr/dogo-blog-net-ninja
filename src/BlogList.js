const BlogList = ({ blogs, title, deleteBlogHandler }) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className='blog-preview'>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => deleteBlogHandler(blog.id)}>
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  )
}

export default BlogList
