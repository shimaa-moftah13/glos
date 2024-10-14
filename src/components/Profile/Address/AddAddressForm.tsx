import React, { useState } from 'react';
import { Address, addAddress } from '@services/addressServices';

import styles from "./styles.module.css"
const {userForm, mainHead, inputGroup, inputField, mainButton } = styles

interface AddressFormProps {
    onAdd: () => void;
  }

const AddAddressForm: React.FC<AddressFormProps> = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newAddress: Address = {
         street, city, zip,
      
    };
    await addAddress(newAddress);
    // Reset form
    setFirstName('');
    setStreet('');
    setCity('');
    setZip('');
    alert('Address added successfully!');
  };

  return (
    <form onSubmit={handleSubmit} >
        <br />
      <h3 className={mainHead}>Add New Address</h3>
      <div className={userForm}>
      <div className={inputGroup}>
      <div className={inputField}>
        <label>Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
     </div>

     <div className={inputGroup}>
     <div className={inputField}>
        <label>Street</label>
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} required />
      </div>
     </div>

     <div className={inputGroup}>
     <div className={inputField}>
        <label>City</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
      </div>
     </div>

      <div className={inputGroup}>
      <div className={inputField}>
        <label>Postal Code</label>
        <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} required />
      </div>
      </div>
      <button type="submit" className={mainButton}>Add Address</button>

      </div>
   

    </form>
  );
};

export default AddAddressForm;
