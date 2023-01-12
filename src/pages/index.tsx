import { DefaultLayout } from '../components/layout/layout';
import MyProfileCard from '../components/myProfileCard';
import { motion } from "framer-motion";


const Home = ():JSX.Element => {

  return (
    <DefaultLayout>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 75 }}
        transition={{ ease: "easeOut", duration: 1 }}
        style={{display:'flex', justifyContent:'center'}}
      >
        <MyProfileCard/>
      </motion.div>
    </DefaultLayout>
  )
}

export default Home
