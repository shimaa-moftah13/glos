
import AddressList from './AddressList'
import AddAddressForm from './AddAddressForm'
import { useState } from 'react';

const Address: React.FC  = () => {

  const [updated, setUpdated] = useState(false);

  const handleUpdate = () => {
    setUpdated(!updated);  // toggle to re-render AddressList
  };

  return (
    <div>
      
        <AddressList/>
        <AddAddressForm onAdd={handleUpdate}/>

      
    </div>
  )
}

export default Address