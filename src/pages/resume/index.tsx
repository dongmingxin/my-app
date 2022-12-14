import React from 'react';
import styled from "styled-components";
import Image from 'next/image';
import getResumeInfo from "../../data/resume";
import { Iexperience } from '../../interfaces/experience';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import { DefaultLayout } from '../../components/layout/layout';
import { motion } from "framer-motion";
import Anchor from '../../components/anchor/Anchor';

const ResumeWrapper = styled.div`
  color: ${props => props.theme.textColorPrimary};
`
const ExperienceHeader = styled.div`
  background-color: ${props => props.theme.primaryColor};
  height: 50px;
  text-align: left;
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColorInBackGround};
  font-weight: 600;
  font-size: 24px;
  text-indent:2em;
  margin-top: 50px;
`
const ExperienceIntro = styled.div`
  padding: 20px 30px 20px 30px;
  text-align: start;
`

const Highlight = styled.div`
  padding: 30px 30px 0px 30px;
`

const HightlightTtitle = styled.div`
  color: ${props => props.theme.primaryColor};
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
`
const HightlightFont = styled.div`
  padding: 0 0 0 10px;
  color: ${props => props.theme.textColorPrimary};
`

const HeightlightListBorder = styled.div`
  padding: 0 0 0 10px;
`
const HightLightList = styled.ul`
  border-left: 2px solid ${props => props.theme.textColorPrimary};
  list-style-type: none;
`
const HightLightListItem = styled.li`
  text-align: start;
  padding: 5px 0 5px 10px;
`
const ProjectPreviewWrapper = styled.div`
  width: 68%;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  .project-image {
    position: relative;
    height: 45vmin;
    margin: 30px 20px 20px 30px;
  }
`

const ProjectLink = styled.a`
  cursor: 'pointer';
  text-decoration: none;
  color: ${props => props.theme.textColorPrimary};
`;
  
const Resume = ():JSX.Element => {

  const resumeInfo = getResumeInfo();

  const renderHightLight = (title:string, lists:string[]) => {

    const isALink = (item:string) => {
      if(item.indexOf("http") !== 0) {
          return (
            item
          )
      }
      return <ProjectLink href={item} target="_blank" rel="project-link">{item}</ProjectLink>
    }
    return (
      <Highlight>
        <HightlightTtitle>
          <CircleTwoToneIcon/>
          <HightlightFont>
            {title}
          </HightlightFont>
        </HightlightTtitle>
        <HeightlightListBorder>
          <HightLightList>
            {lists.map((project,i:number)=>(
              <HightLightListItem key={i}>
                {isALink(project)}
              </HightLightListItem>
            ))}
          </HightLightList>
        </HeightlightListBorder>
      </Highlight>
    )
  }  

  const renderResume = () => {
    return (
      resumeInfo.map((project:Iexperience, index) =>(
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          transition={{ ease: "easeOut", duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          key={index}
          id={`project${index}`}
        >
          <ExperienceHeader>
            {project.experienceHeader}
          </ExperienceHeader>
          <ExperienceIntro>
            {project.experienceIntro}
          </ExperienceIntro>
          {renderHightLight("Tech Stacks & Project Hightlight",project.hightlight)}
          <ProjectPreviewWrapper>
            {renderHightLight("Project Links:", project.projectLinks)}
            <motion.div 
              className='project-image'
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 4 }}
            >
              <Image 
                src={project.projectPreview} 
                alt="project-website-preview" 
                layout='fill'
              />
            </motion.div>
          </ProjectPreviewWrapper>
        </motion.div>
      ))
    )
  }
  
  return (
    <DefaultLayout>
      <ResumeWrapper>
        {renderResume()}
        <Anchor/>
      </ResumeWrapper>
    </DefaultLayout>
  )
}

export default Resume;