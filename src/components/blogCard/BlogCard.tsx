import styled from 'styled-components'
import Card from '../card/Card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const CardContainer = styled.div`
    .blog-card {
        height: 200px;
        grid-template-rows: 4fr 1fr;
        box-shadow: none;
        background-color: #e8f3ff;
        overflow: hidden;
        display: grid;
        grid-gap: 0;
        cursor: pointer;
        position: relative;
        transition: box-shadow 0.1s linear, transform 0.15s ease-out;
        &:hover {
            .date {
                transform: translateX(0%);
            }
            transform: translateY(-10px);
            box-shadow: 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20);
        }
        .date {
            position: absolute;
            top: 5px;
            right: 5px;
            color: #fff;
            background-color: #2eca7f;
            padding: 3px 10px;
            border-radius: 15px;
            font-size: 12px;
            z-index: 1;
            transform: translate3d(120%,0,0);
            transition: transform 0.35s cubic-bezier(0.8, 1, 0.8, 1);
        }
        .blog-background-wrapper {
          position: relative;
          box-sizing: border-box;
        }
        .blog-title {
          box-sizing: border-box;
          display:inline-block;
          text-align: center;
          margin-top: 10px;
          padding: 0 15px 0 15px;
          font-size: 13px;
          color: #909399;
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis; 
        }
      }
`

interface BlogCardProps {
    imageSrc: string;
    title:string;
    id: string;
    date: Date;
}

const BlogCard = ({
    imageSrc,
    title,
    id,
    date
}:BlogCardProps) => {
    const router = useRouter();
    const uploadDate = new Date(date).toLocaleDateString().replace(/[/]/g, '-');

    return (
        <CardContainer
            onClick={()=>{
                router.push(`/blog/${id}`)
            }}
        >
            <Card className='blog-card'>
                <div className='date'>{uploadDate}</div>
                <div className='blog-background-wrapper'>
                    <Image src='/sidenav-bg.jpeg' alt='blog-background' layout='fill'/>
                </div>
                <div className='blog-title'>{title}</div>
            </Card>
        </CardContainer>
    )
}

export default BlogCard;