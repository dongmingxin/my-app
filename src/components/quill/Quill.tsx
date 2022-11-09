import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import 'react-quill/dist/quill.snow.css'
import useLocalStorage from '../../utils/useLocalStorage'

const QuillWrapper = styled.div`
  width: 90%;
  padding: 30px 0 0 0;
  .ql-editor {
    min-height: 30em;
  }
  .title {
    width: 100%;
    border: 1px solid #ccc;
    padding: 12px 20px;
    border-radius: 4px;
    margin-bottom: 30px;
    box-sizing: border-box;
  }
  .upload-btn {
    font-family: 'Noto Sans', sans-serif;
    cursor: pointer;
    box-shadow: -1px 3px 3px 0 rgba(80, 80, 80, .2);
    width: 155px;
    height: 50px;
    padding: 15px;
    border: none;
    border-radius: 10px;
    margin: 30px 0 0 0;
    color: #fff;
    font-weight: bold;
    background: #2eca7f;
    transition: all 0.25s ease-out;
    &:hover{
      position: relative;
      top: -3px;
      box-shadow: -6px 14px 12px 2px rgba(90, 90, 90, .12);
    }
  }
`
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  })

const modules = {
  toolbar: [
      [{ header: '1' }],
      [{ size: [] }],
      ['bold', 'underline', 'strike', 'blockquote','code-block'],
      [
      { list: 'ordered' },
      { list: 'bullet' },
      // { indent: '-1' },
      // { indent: '+1' },
      ],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      [
      // 'link', 
      'image',
      // 'video'
      ],
      ['clean'],
  ],
  clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
  },
}
/*
* Quill editor formats
* See https://quilljs.com/docs/formats/
*/
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block',
  'align'
]


interface QuillProps {
  onUpload: ()=>Promise<void>
}

const Quill = ({onUpload}:QuillProps) => {
	const [value, setValue] = useLocalStorage({initalValue:'',key:'blog'});
  const [blogTitle, setBlogTitle] = useLocalStorage({initalValue:'', key:'header'})

  const handleUpload = async() => {
    
    onUpload().then(()=>{
      setValue('');
      setBlogTitle('');
    })
  }

  return (
    <QuillWrapper>
      <input 
        placeholder='Enter Blog Title' 
        type='text' 
        className='title' 
        value={blogTitle}
        onChange={(event)=>setBlogTitle(event.target.value)}
      />
      <QuillNoSSRWrapper
        theme='snow'
        value={value}
        onChange={setValue}
        formats={formats}
        modules={modules}
      />
      <button className='upload-btn' onClick={handleUpload}>
        Upload
      </button>
    </QuillWrapper>
  )
}

export default Quill