import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = ({ match }) => {
  const { id } = useParams()
  const { loading, errorMessage, data: blog } = useFetch(
    `http://localhost:8000/blogs/${id}`
  )

  console.log(blog)

  return (
    <div className='blog-details'>
      {loading ? (
        <p>Loading...</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
