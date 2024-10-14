import React, { useEffect, useState } from "react";
import { Address, getAddresses } from "@services/addressServices";
import { Link, useNavigate } from 'react-router-dom';

import styles from "./styles.module.css";
import AddAddressForm from "./AddAddressForm";
const { userCard, userAddress, title, userButton } = styles;

const AddressList: React.FC = () => {
  const [users, setUsers] = useState<Address[]>([]);

  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    const data = await getAddresses();
    setUsers(data);
  };

  // const navigate = useNavigate(); // Hook to navigate programmatically

  // const goToAnotherPage = () => {
  //   navigate('profile/addaddress'); // Navigates to another page
  // };

  return (

    <div className={userAddress}>
      <h2>Addresses</h2>
      <p>
        Manage your saved addresses for fast and easy checkout across our
        marketplaces
      </p>

      {/* <Link to="profile/addaddress">
      <button onClick={goToAnotherPage}>Add New Address</button>
      </Link> */}
      

      {users.map((addresses) => (
        <div key={addresses.userId} className={userCard}>
          <div>
            <div>
              <span className={title}>Name:  </span>
              <span >
                {addresses.name}
              </span>
            </div>
            <div>
              <span className={title}>Address:  </span>
              <span>
                {addresses.street}, {addresses.city}
              </span>
            </div>
          </div>

          <div>
            <button className={userButton}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
