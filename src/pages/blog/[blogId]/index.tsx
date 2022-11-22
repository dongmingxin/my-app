import styled from 'styled-components'
import { DefaultLayout } from '../../../components/layout/layout'
import { InferGetServerSidePropsType } from 'next'
import axios from 'axios'
import { baseURL } from '../../../services/axios'

const BlogWrapper = styled.div`
    background-image: linear-gradient(90deg,rgba(159,219,252,.15) 3%
    ,transparent 0),linear-gradient(1turn,rgba(159,219,252,.15) 3%,
    transparent 0);
    background-size: 20px 20px;
    background-position: 50%;
    width: 100%;
    min-height: 80vh;
    margin-top: 50px;
    overflow: hidden;
`
const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    padding: 0 15px 0 15px;
    color: ${props => props.theme.textColorSecondary};
`
const Content = styled.div`
    padding: 0 15px 0 15px;
    font-size: 16px;
    margin-top: 50px;
    color: ${props => props.theme.textColorPrimary};
    text-overflow: wrap;
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    @media screen and (max-width: 900px) {
        img {
            width: 100%;
        }
    }
`

type Props = {
    _id: string;
    title: string;
    content: string;
    image: string;
    _v: number
}

const Blog = ({ blog }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <DefaultLayout>
            <BlogWrapper>
                <Title>{blog?.title}</Title>
                <Content dangerouslySetInnerHTML={{ __html: blog?.content }} />
            </BlogWrapper>   
        </DefaultLayout>
    )
}

export default Blog;

export const getServerSideProps = async (context:any) => {

    const { blogId } = context.query;
    const { data } = await axios.get(`${baseURL}/api/blog/${blogId}`)
    const blog:Props = data
  
    return {
      props: {
        blog: blog
      }
    }
  }