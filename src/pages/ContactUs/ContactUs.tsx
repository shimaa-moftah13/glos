
// import banner from "@assets/contactus.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';

import styles from "./styles.module.css";
const { contactContainer, backgroundImage, formOverlay, form, formGroup, 
  submitButton, emaiInput, icons } = styles;

const ContactUs = () => {
  return (
    <div className={contactContainer}>
    <div className={backgroundImage}>
    <h1>CONTACT FORM</h1>
        {/* <img src={banner} alt="" /> */}
    </div>
    <div className={formOverlay}>
      
      <p>
        Thank you for your interest in our work!<br />
        If you want to book a shoot or discuss its details, leave your contact information,
        and I will definitely contact you in 24 hours.<br />
        Please indicate a convenient time for a call.
      </p>
      <form className={form}>
        <div className={formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  />
        </div>
        <div className={formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={emaiInput} />
        </div>
        <button type="submit" className={submitButton}>Send ...</button>
      </form>
    </div>

    <div className={icons}>
        <InstagramIcon/>
        <FacebookOutlinedIcon/>
        <PinterestIcon/>


    </div>
  </div>
  )
}

export default ContactUs