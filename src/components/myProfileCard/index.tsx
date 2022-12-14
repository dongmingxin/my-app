import styled from "styled-components";
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import useCheckMobileScreen from "../../utils/useCheckMobileScreen";

const Container = styled.div`
  /* width: 100%; */
  padding: 0 0 50px 0;
  border-radius: 15px;
  background-color: ${props => props.theme.cardBackgroundColor};
  box-shadow: ${props => props.theme.cardBoxShadow};
  @media screen and (max-width: 768px) {
    max-width: 90%;
    margin: 20px 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const GeneralprofileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: ${props => props.theme.primaryColor};
`;

const PhotoContainer = styled.div`
  margin: 0 0 0 50px;
  width: 250px;
  height: 250px;
  position: relative;
  border: 3px solid white;
  transition: all 0.5s linear, transform 0.5s ease-out;
  transform: translateY(10%);
  &:hover{
    transform: translateY(0%);
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.1)
  }
`;

const TitleContainer = styled.div`
  padding: 0 150px 0 0;
`;

const Name = styled.div`
    margin-top: 50px;
    font: 54px monsterrat, Helvetica, sans-serif;
    font-weight: bold;
    color: ${props => props.theme.textColorInBackGround};
    padding: 0px 0 20px 0;
`;

const Title = styled.div`
  color: ${props => props.theme.textColorInBackGround};
  font-size: 18px;
`;

const SocialAccountLinkContainer = styled.div`
`;

const GeneralInformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AboutMeWrapper = styled.div`
  padding: 30px 80px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const AboutMeTitle = styled.h3`
  color: ${props => props.theme.textColorPrimary};;
  font-size: 21px;
  span{
    color: ${props => props.theme.primaryColor};
  }
`;

const AboutMeIntroduction = styled.div`
  text-align: start;
  line-height: 25px;
  color: ${props => props.theme.textColorPrimary};;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px 0 0;
  flex: 1;
`;

const Link = styled.a`
  cursor: 'pointer';
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 15px;
`;
const RowTitle = styled.div`
  color: ${props => props.theme.textColorPrimary};
  display: flex;
  align-items: flex-start;
  width: 120px;
`;
const RowInfo = styled.div`
  color: ${props => props.theme.textColorPrimary};
  display: flex;
  text-align: start;
  text-overflow: hidden;
`;

const materialIcon = {
  fontSize: 40,
  color: 'white',
  padding: '10px 5px 10px 5px',
  cursor: 'pointer',
}

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .top {
    width: 100%;
    padding: 0 0 20px 0;
    background-color: ${props => props.theme.primaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.textColorInBackGround};
    .photo {
      margin-top: 50px;
      border: 2px solid #fff
    }
    .name {
      font-size: 35px;
      font-weight: bold;
      margin-top: 25px;
    }
    .role {
      margin-top: 20px; 
      font-size: 18px;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    color: ${props => props.theme.textColorPrimary};
    .aboutme {
      font-size: 21px;
      padding: 0 0 10px 0;
      font-weight: bold;
    }
  }
`

const MyProfileCard = () => {
  const detailInfoList:{title: string; info: string;}[] = [
    {title: 'Residence', info: 'Australia'},
    {title: 'Address', info: '150 Johnston st, Southport, QLD'},
    {title: 'Email', info: 'dongmingzin@gmail.com'},
    {title: 'Mobile', info: '+61 468 925 505'}
  ]

  const aboutMe = `2 years of front-end and back-end development experience. delivered large projects for
  finance and commercial clients, I am a motivated and enthusiastic developer, proficient in using
  Node.js and React.js for web development, I honed my abilities in JavaScript and software best
  practices assurance, always adhere to the principles of Readable, Maintainable, and Reusable
  for coding`

  const renderDetailInfo = (title:string, info:string) => {
    return (
      <Row key={title}>
        <RowTitle>{title}:</RowTitle>
        <RowInfo>{info}</RowInfo>
      </Row>
    )
  }

  return (
      <Container>
        {useCheckMobileScreen() ? (
          <MobileContainer>
            <div className="top">
              <Image
                src='/photo.png'
                alt="personal-photo"
                object-fit="cover"
                width={200}
                height={200}
                className='photo'
              />
              <div className="name">
                Mingxin Dong
              </div>
              <div className="role">
                Frontend developer
              </div>
              <div className="icon">
                <Link href="https://github.com/dongmingxin" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon sx={materialIcon} />
                </Link>
                <Link href="https://www.linkedin.com/in/mingxin-dong/" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon sx={materialIcon} />
                </Link>
                <FacebookOutlinedIcon sx={materialIcon} />
              </div>
            </div>
            <div className="bottom">
              <div className="aboutme">
                About me
              </div>
                <p>
                  {aboutMe}
                </p>
            </div>
          </MobileContainer>
        ) : (
          <>
            <GeneralprofileContainer>
              <PhotoContainer>
                <Image
                  src='/photo.png'
                  alt="personal-photo"
                  object-fit="cover"
                  width={250}
                  height={250} />
              </PhotoContainer>
              <TitleContainer>
                <Name>Mingxin Dong</Name>
                <Title>Front-end Developer</Title>
                <SocialAccountLinkContainer>
                  <Link href="https://github.com/dongmingxin" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={materialIcon} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/mingxin-dong/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={materialIcon} />
                  </Link>
                  <FacebookOutlinedIcon sx={materialIcon} />
                </SocialAccountLinkContainer>
              </TitleContainer>
            </GeneralprofileContainer>
            <GeneralInformationContainer>
                <AboutMeWrapper>
                  <AboutMeTitle>About <span>Me</span></AboutMeTitle>
                  <AboutMeIntroduction>
                    {aboutMe}
                  </AboutMeIntroduction>
                </AboutMeWrapper>
                <DetailInfo>
                  {detailInfoList.map(i => renderDetailInfo(i.title, i.info))}
                </DetailInfo>
              </GeneralInformationContainer>
            </>
        )}
      </Container>
  )
}

export default MyProfileCard