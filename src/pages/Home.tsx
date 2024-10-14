
import Slider from "@components/common/Slider/Slider"
import ContactUs from "./ContactUs/ContactUs"
import AboutUs from "./AboutUs/AboutUs"


const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <AboutUs/>
      <ContactUs/>
      
  
    </div>
  )
}

export default Home