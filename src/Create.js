import { useState } from 'react'

const Create = () => {
  const 


  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog body:</label>
        <input type='text'></input>
        <label>Blog title:</label>
        <textarea></textarea>
        <label>BlogAuthor</label>
        <select>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default Create
