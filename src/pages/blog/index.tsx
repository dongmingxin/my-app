import React from 'react'
import { InferGetStaticPropsType } from 'next'
import axios from 'axios'
import { baseURL } from '../../services/axios'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import BlogCard from '../../components/blogCard/BlogCard'
import ProfileCard from '../../components/profileCard/ProfileCard'
import { DefaultLayout } from '../../components/layout/layout'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
		'blogs-wrapper blogs-wrapper blogs-wrapper profile'
		'blogs-wrapper blogs-wrapper blogs-wrapper recent-update'
    'blogs-wrapper blogs-wrapper blogs-wrapper .';
  @media screen and (max-width: 992px) {
    grid-template-areas:
      'blogs-wrapper';
    .profile{
      display: none;
    }
    .recent-update{
      display: none;
    }
  }
  grid-gap: 15px;
  .blogs-wrapper {
    grid-area: blogs-wrapper;
    .blogs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 15px;
      grid-gap: 25px 15px;
      @media screen and (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  .profile {
    height: 340px;
    grid-area: profile;
  }
  .recent-update {
    grid-area: recent-update;
    .update-blog {
      padding: 10px 15px;
      cursor: pointer;
      p {
        position: relative;
        margin: 0px;
        display: inline-block;
        padding-bottom:2px;
        background-image: linear-gradient(${props => props.theme.textColorSecondary} 0 0);
        background-position: left bottom;
        background-size: 0% 1px;
        background-repeat: no-repeat;
        transition: background-size 0.5s;
        &:hover {
          color: ${props => props.theme.textColorSecondary};
          background-size: 100% 1px;
        }
      }
    }
  }
`

type blog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  date: Date;
  _v: number
}

const Blogs = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <DefaultLayout>
      <Container>
        <Card className='blogs-wrapper'>
          <Card.Header>All Blogs</Card.Header>
          <div className='blogs'>
            {blogs.map((blog:blog)=>(
              <BlogCard 
                imageSrc={blog.image} 
                title={blog.title}
                id={blog._id}
                date={blog.date}
                key={blog._id}
              />
            ))}
          </div>
        </Card>
        <ProfileCard className='profile'/>
        <Card className='recent-update'>
          <Card.Header>New posts</Card.Header>
          <div className='update-blog'><p>Turbopack</p></div>
          <div className='update-blog'><p>Verify the post-order traversal</p></div>
          <div className='update-blog'><p>Xcode Conif GitHub</p></div>
          <div className='update-blog'><p>Learn New operator</p></div>
          <div className='update-blog'><p>string to tree structure</p></div>
        </Card>
      </Container>
    </DefaultLayout>
  )
}

export default Blogs;

export const getStaticProps = async () => {

  const { data } = await axios.get(`${baseURL}/api/blog`);
  const blogs:Array<blog> = data;

  return {
    props: {
      blogs: blogs
    },
  }
}