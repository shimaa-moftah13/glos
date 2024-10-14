import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import { Link } from 'react-router-dom';

import styles from "./styles.module.css"

const {userSidebar, s2, s1, stylenone } = styles

const UserSidebar = ({activepage}) => {
  return (
    <div className={userSidebar}>
{
  activepage === "accountsettings" ? 
  <div className={s2}>
    <AccountCircleOutlinedIcon/>
    <span>Account Settings</span>
  </div>
  :
  <Link
    to="/profile/accountsettings"
    className={stylenone}
  >
  <div className={s1}>
    <AccountCircleOutlinedIcon/>
    <span>Account Settings</span>
  </div>
  </Link>
}

{
  activepage === "orders" ? 
  <div className={s2}>
    <LocalMallOutlinedIcon/>
    <span>Orders</span>
  </div>
  :
 <Link
 to="/profile/orders"
 className={stylenone}
 >
  <div className={s1}>
    <LocalMallOutlinedIcon/>
    <span>Orders</span>
  </div>
 </Link>
}

{
  activepage === "address" ? 
  <div className={s2}>
    <FmdGoodOutlinedIcon/>
    <span>Address</span>
  </div>
  :
  <Link
  to="/profile/address"
  className={stylenone}
  >
   <div className={s1}>
    <FmdGoodOutlinedIcon/>
    <span>Address</span>
  </div>
  
  </Link>
}

{
  activepage === "changepassword" ? 
  <div className={s2}>
    <HttpsOutlinedIcon/>
    <span>Change Password</span>
  </div>
  :
 <Link
    to="/profile/changepassword"
    className={stylenone}
 >
    <div className={s1}>
    <HttpsOutlinedIcon/>
    <span>Change Password</span>
  </div>
 </Link>
}
    </div>
  )
}

export default UserSidebar