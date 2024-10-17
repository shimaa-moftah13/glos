

import img4 from "@assets/pexels-ron-lach-10121693.jpg"
import smallImg from "@assets/download (2).jfif"

import styles from "./styles.module.css";
const { aboutUsContainer, textContent, tagline, title, description, readMoreBtn, imageContent, showcaseImage, small   } = styles;

const AboutUs = () => {
  return (
//   <Container className={aboutUs}>
//   <Row>
//     <Col>
//     </Col>
//     {/* <Col md="auto">
    
//     </Col> */}
//     <Col className={aboutUsImg}>
//       <img src={img3} alt="" className={largeimg}/>
//       <img src={smallImg} alt="" className={smalimg} />
//       {/* <div className={smalimg}>
      
//       </div> */}
//     </Col>
//   </Row>

// </Container>

<div className={aboutUsContainer}>
<div className={textContent}>
  <h5 className={tagline}>EVERYDAY QUALITY</h5>
  <h1 className={title}>
    MADE <em>to</em> WITHSTAND <em>the</em> WEARS OF LIFE.
  </h1>
  <p className={description}>
    From your daily routines, to work matters,
     and special occasions, 
     our pieces are made to add an understated luxury for all of your life's
    moments.
  </p>
  <p className={description}>
    And because those who are refined by fire can endure more than we
    think, the same goes for our pieces – made for durable wearability.
    Wellanee was born with your individuality at heart, and at hand.
  </p>
  <button className={readMoreBtn}>Read More</button>
</div>
<div className={imageContent}>
  <img
    src={img4}
    alt="Jewelry pieces and model"
    className={showcaseImage}
  />
  <img src={smallImg} alt="" 
      className={small}
  />
</div>
</div>
  )
};

export default AboutUs;



