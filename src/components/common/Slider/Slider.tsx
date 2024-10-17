import { useState } from "react"

import Slide3 from "@assets/pexels-natalie-bond-320378-21787518.jpg"

import Slide5 from "@assets/kateryna-hliznitsova-cesczzjtreg-unsplash.jpg"


import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import styles from "./styles.module.css";

const {slider, slidercontainer, icons, icon, sliderImg } = styles;

const Slider = () => {

    const slides =[
        {url: Slide5},

        {url: Slide3},
       
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
    
    //    const goToSlide = (slideIndex) => {
    //     setCurrentIndex(slideIndex)
    //    }

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