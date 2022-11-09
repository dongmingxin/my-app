import Layout from '../components/layout/layout';
import TopNav from '../components/navigation/TopNav';
import styled, { ThemeProvider } from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { useThemeContext } from '../context/theme';

const Container = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
        max-width: 90%;
  }
  padding: 0 0 50px 0;
  border-radius: 15px;
  box-shadow: 0px 3px 8px 0px rgb(0 0 0 / 10%);
  background-color: #ffffff;
`
const GeneralprofileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: #2eca7f;
`;

const PhotoContainer = styled.div`
  padding: 50px 0 0 50px;
`;

const Photo = styled.img`
  width: 250px;
  height: 250px;
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
    color: white;
    padding: 0px 0 20px 0;
`;

const Title = styled.div`
  color: white;
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
  color: black;
  font-size: 21px;
  span{
    color: #2eca7f ;
  }
`;

const AboutMeIntroduction = styled.div`
  text-align: start;
  line-height: 25px;
  color: #424242;
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
  display: flex;
  align-items: flex-start;
  width: 120px;
`;
const RowInfo = styled.div`
  color: gray;
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


const Home = ():JSX.Element => {

  const theme = useThemeContext();

  const detailInfoList:{title: string; info: string;}[] = [
    {title: 'Residence', info: 'Australia'},
    {title: 'Address', info: '150 Johnston st, Southport, QLD'},
    {title: 'Email', info: 'dongmingzin@gmail.com'},
    {title: 'Mobile', info: '+61 468 925 505'}
  ]

  const renderDetailInfo = (title:string, info:string) => {
    return (
      <Row key={title}>
        <RowTitle>{title}:</RowTitle>
        <RowInfo>{info}</RowInfo>
      </Row>
    )
  }

  return (
    <ThemeProvider theme={theme?.themeProps}>
      <Layout>
        <Layout.Container>
          <TopNav />
          <Container>
            <GeneralprofileContainer>
              <PhotoContainer>
                <Photo src='/photo.png' alt="personal-photo"/>
              </PhotoContainer>
              <TitleContainer>
                <Name>Mingxin Dong</Name>
                <Title>Front-end Developer</Title>
                <SocialAccountLinkContainer>
                  <Link href="https://github.com/dongmingxin" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon sx={materialIcon}/>
                  </Link>
                  <Link href="https://www.linkedin.com/in/mingxin-dong/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={materialIcon}/>
                  </Link>
                  <FacebookOutlinedIcon sx={materialIcon}/>
                </SocialAccountLinkContainer>
              </TitleContainer>
            </GeneralprofileContainer>
            <GeneralInformationContainer>
              <AboutMeWrapper>
                <AboutMeTitle>About <span>Me</span></AboutMeTitle>
                <AboutMeIntroduction>
                  2 years of front-end and back-end development experience. delivered large projects for 
                  finance and commercial clients, I am a motivated and enthusiastic developer, proficient in using 
                  Node.js and React.js for web development, I honed my abilities in JavaScript and software best 
                  practices assurance, always adhere to the principles of Readable, Maintainable, and Reusable 
                  for coding
                </AboutMeIntroduction>
              </AboutMeWrapper>
              <DetailInfo>
                  {detailInfoList.map(i => renderDetailInfo(i.title, i.info,))}
              </DetailInfo>
            </GeneralInformationContainer>
          </Container>
        </Layout.Container>
      </Layout>
    </ThemeProvider>
  )
}

export default Home
