import styled from "styled-components";
import Card from "../card/Card";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


const ProfileCardWrapper = styled(Card)`
    display: grid;
    grid-template-areas:
    'avatar-wrapper avatar-wrapper avatar-wrapper'
    'avatar-wrapper avatar-wrapper avatar-wrapper'
    'avatar-wrapper avatar-wrapper avatar-wrapper'
    'name name name'
    'slogen slogen slogen'
    'blogs article comments'
    'social-links social-links social-links'
    'social-links social-links social-links';
    overflow: hidden;
    grid-gap: 10px 10px;
    .avatar-wrapper {
        grid-area: avatar-wrapper;
        position: relative;
        display: flex;
        justify-content: center;
        .background {
            filter: blur(1px);
        }
        .avatar {
            width: 75px;
            height: 75px;
            align-self: flex-end;
            position: relative;
            border-radius: 50%;
            border: solid 4px transparent;
			background-color: #fff;
            transition: transform .7s ease-in-out;
            cursor: pointer;
            &:hover {
                transform: rotate(360deg);
            }
            .photo {
                border-radius: 50%;
            }
        }
        
    }
    .name {
        grid-area: name;
        text-align: center;
        color: #2eca7f;
        
    }
    .slogen {
        grid-area: slogen;
        text-align: center;
        color: #999;
    }
    .blogs {
        grid-area: blogs;
        position: relative;
        &:after {
            position: absolute;
            top: 12px;
            right: 0;
            content: "";
            width: 1px;
            height: 30px;
            background: black
        }
    }
    .article {
        grid-area: article;
        position: relative;
        &:after {
            position: absolute;
            top: 12px;
            right: 0;
            content: "";
            width: 1px;
            height: 30px;
            background: black
        }
    }
    .comments {
        grid-area: comments;
    }
    .social-links {
        grid-area: social-links;
        margin: 0 15px 0 15px;
        border-top: 1px solid black;
        display: grid;
        grid-template-areas:
        "facebook linkedin github";
        .facebook{
            grid-area: facebook;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .linkedin{
            grid-area: linkedin;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .github{
            grid-area: github;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        & div:nth-child(2) {
            margin-top: 8px;
        }
    }
`
interface ProfileCard {
	className?: string
}

const ProfileCard = ({className}:ProfileCard) => {
    return (
        <ProfileCardWrapper className={className}>
            <div className="avatar-wrapper">
                <Image 
                    src='/sidenav-bg.jpeg'
                    alt='perfile card avatar wrapper background'
                    layout='fill'
                    objectFit="cover"
                    className="background"
                />
                <div className="avatar">
                    <Image 
                        src='/photo.png'
                        alt='perfile card avatar'
                        layout='fill'
                        objectFit="cover"
                        className='photo'
                    />
                </div>
            </div>
            <div className="name">神奇的程序员</div>
            <div className="slogen">今天的努力只为未来</div>
            <div className="blogs icons">
                <div>18</div>
                <div>专栏数</div>
            </div>
            <div className="article icons">
                <div>150</div>
                <div>文章数</div>
            </div>
            <div className="comments icons">
                <div>78</div>
                <div>评论数</div>
            </div>
            <div className="social-links">
                <div className="github">
                    <GitHubIcon/>
                </div>
                <div className="linkedin">
                    <LinkedInIcon/>
                </div>
                <div className="facebook">
                    <InstagramIcon />
                </div>
            </div>
        </ProfileCardWrapper>
    )
}

export default ProfileCard;