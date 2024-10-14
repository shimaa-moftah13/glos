import { useState } from "react"
import Slide1 from "@assets/pexels-arjunadinata-15157998.jpg"
import Slide2 from "@assets/pexels-ekaterina-nt-78159118-9185029.jpg"
import Slide3 from "@assets/pexels-natalie-bond-320378-21787518.jpg"
import Slide4 from "@assets/pexels-ron-lach-10121693.jpg"
import Slide5 from "@assets/kateryna-hliznitsova-cesczzjtreg-unsplash.jpg"
import Slide6 from "@assets/pexels-sunsetoned-6431177.jpg"
import Slide7 from "@assets/pexels-sunsetoned-6431179.jpg"

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import styles from "./styles.module.css";

const {slider, slidercontainer, icons, icon, sliderImg } = styles;

const Slider = () => {

    const slides =[
        {url: Slide5},
        {url: Slide2},
        {url: Slide3},
        {url: Slide4},
        {url: Slide1},
        {url: Slide6},
        {url: Slide7}
       ]

       const [currentIndex, setCurrentIndex] = useState(0)

       const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
       }
       const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
       }
    
       const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
       }

  return (
    <div className={slider}>
        <div className={slidercontainer}>

            <img src={slides[currentIndex].url} alt="placholder" className={sliderImg} />
        </div>
        <div className={icons}>
            <div onClick={prevSlide} className={icon}>
                <KeyboardArrowLeftOutlinedIcon/>
            </div>
            <div onClick={nextSlide} className={icon}>
                <KeyboardArrowRightOutlinedIcon/>
            </div>
          
        </div>
    </div>
  )
}

export default Slider