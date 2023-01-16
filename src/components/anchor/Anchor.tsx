import styled from "styled-components";
import Link from 'next/link';


const Anchorbar = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
  position: fixed;
  top:30%;
  right: 20px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 10%);
  z-index: 1;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: ${props => props.theme.cardBoxShadow};
  .title {
    width: 100%;
    padding: 20px 0;
    color: black;
    text-align: center;
    background-color: ${props => props.theme.primaryColor};
  }
  .projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    a {
      padding: 10px 10px;
      color: ${props => props.theme.textColorPrimary};
      text-decoration: none;
    }
  }
  .back-to-top {
    width: 100%;
    padding: 10px 0;
    color: black;
    text-align: center;
    background-color: ${props => props.theme.primaryColor};
    cursor: pointer;
  }

`

const Anchor = () => {
  return (
    <Anchorbar>
      <div className='title'>
        Projects
      </div>
      <div className='projects'>
        <Link className='project' href='#project0' scroll={false}>
          DigiGround
        </Link>
        <Link className='project' href='#project1' scroll={false}>
          JR Acadamy
        </Link>
        <Link className='project' href='#project2' scroll={false}>
          Online Resume
        </Link>
        <Link className='project' href='#project3' scroll={false}>
          Pizza Website
        </Link>
        <Link className='project' href='#project4' scroll={false}>
          Weather App
        </Link>
      </div>
      <div className="back-to-top" onClick={()=>{window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });}}>
        Back To Top
      </div>
    </Anchorbar>
  )
}

export default Anchor