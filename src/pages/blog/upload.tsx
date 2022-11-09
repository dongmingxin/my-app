import React, { useState } from 'react'
import Layout from '../../components/layout/layout'
import TopNav from '../../components/navigation/TopNav'
import Quill from '../../components/quill/Quill'
import { postBlog } from '../../services/blog';
import SimpleSnackbar from '../../components/snackbar/Snackbar';

const Upload = () => {

  const [snakeBarOpen, setSnakeBarOpen] = useState(false);

  const handleClose = () => {
    setSnakeBarOpen(false);
  };

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

    try {
      const result = await postBlog(blogData);
      return result
    } catch (error) {
      console.log('loged')
      setSnakeBarOpen(true)
    }


  }
  return (
    <Layout>
      <SimpleSnackbar
        status={snakeBarOpen}
        onClose={handleClose}
        message='Title and Content can not be empty'
      />
        <Layout.Container>
            <TopNav/>
            <Quill 
              onUpload={handleUpload}
            />
        </Layout.Container>
    </Layout>
  )
}

export default Upload