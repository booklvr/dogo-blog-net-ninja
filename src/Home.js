import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState(null)

  const deleteBlogHandler = (id) => {
    setBlogs(() => blogs.filter((blog) => blog.id !== id))
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data)
      })
  }, [])

  return (
    <div className='home'>
      {blogs && (
        <BlogList
          blogs={blogs}
          title={'All Blogs'}
          deleteBlogHandler={deleteBlogHandler}
        />
      )}
    </div>
  )
}

export default Home