import React from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import Layout from '../../components/layout/layout'
import TopNav from '../../components/navigation/TopNav'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import BlogCard from '../../components/blogCard/BlogCard';
import ProfileCard from '../../components/profileCard/ProfileCard';

const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
		'blogs-wrapper blogs-wrapper blogs-wrapper profile'
		'blogs-wrapper blogs-wrapper blogs-wrapper recent-update'
    'blogs-wrapper blogs-wrapper blogs-wrapper .';
  grid-gap: 15px;
  .blogs-wrapper {
    grid-area: blogs-wrapper;
    .blogs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      padding: 15px;
      grid-gap: 25px 15px;
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

type Props = {
  blogs: Array<blog>
}

const Blogs = ({ blogs }: Props) => {

  return (
    <Layout>
        <Layout.Container>
            <TopNav/>
            <Body>
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
                <Card.Header>最新文章</Card.Header>
                <div className='update-blog'>Turbopack似乎并没有那么牛</div>
                <div className='update-blog'>校验二叉树的后序遍历序列</div>
                <div className='update-blog'>Xcode配置GitHub</div>
                <div className='update-blog'>深入理解New操作符</div>
                <div className='update-blog'>字符串转树结构</div>
              </Card>
            </Body>
        </Layout.Container>
    </Layout>
  )
}

export default Blogs;

export const getStaticProps:GetStaticProps<Props> = async () => {

  const { data } = await axios.get('http://localhost:3000/api/blog')

  return {
    props: {
      blogs: data
    }
  }
}