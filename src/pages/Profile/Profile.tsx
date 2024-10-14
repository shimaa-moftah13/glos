import { AccountSettings, UserSidebar, ChangePassword, Orders } from "@components/Profile";
import styles from "./styles.module.css"
import { useParams } from "react-router-dom";
import Address from "@components/Profile/Address/Address";



const { userProfile, left, right} = styles



const Profile = () => {


  const {activepage} = useParams()

  return <div className={userProfile}>
   <div className={left}>
    <UserSidebar activepage={activepage}/>
   </div>
   <div className={right}>
    {activepage === 'accountsettings' && <AccountSettings/>}
    {activepage === 'changepassword' && <ChangePassword/>}
    {activepage === 'address' && <Address/>}
    {activepage === 'orders' && <Orders/>}
   </div>

   
  </div>;
};

export default Profile;
