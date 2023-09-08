
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/productContext'


const About = () => {
  const {myName} = useProductContext();

  const data = {
    name:'thapa e-commerce'
  }

  return (
    <>
    {myName}
      <HeroSection myData={data}/>
    </>
    
   )
}


export default About
