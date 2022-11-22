import { DefaultLayout } from '../components/layout/layout';
import MyProfileCard from '../components/myProfileCard';


const Home = ():JSX.Element => {

  return (
    <DefaultLayout>
      <MyProfileCard/>
    </DefaultLayout>
  )
}

export default Home
