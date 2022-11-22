import React from 'react'
import Quill from '../../../components/quill/Quill'
import { postBlog } from '../../../services/blog'
import { DefaultLayout } from '../../../components/layout/layout'

const Upload = () => {

  const handleUpload = async() => {

    let blogData = {}

    if(localStorage.getItem('header') !== null && localStorage.getItem('blog') !== null) {
      const title = JSON.parse(localStorage.getItem('header') || '{}')
      const content = JSON.parse(localStorage.getItem('blog') || '{}')
      blogData = {
        title,
        content
      }
    }
    
    await postBlog(blogData);

  }
  return (
    <DefaultLayout>
      <Quill 
        onUpload={handleUpload}
      />
    </DefaultLayout>
  )
}

export default Upload