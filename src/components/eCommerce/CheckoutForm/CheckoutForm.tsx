

// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import styles from './styles.module.css'; // CSS Module

// const CheckoutForm: React.FC = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!stripe || !elements) {
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     try {
//       const { data: clientSecret } = await axios.post('http://localhost:5005/payments/create', {
//         amount: 1000, // Amount in cents
//       });

//       const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement!,
//         },
//       });

//       if (paymentResult.error) {
//         setError(paymentResult.error.message || 'Payment failed');
//       } else {
//         setError(null);
//         console.log('Payment successful', paymentResult);
//       }
//     } catch (err) {
//       setError('Error processing payment');
//     }

//     setLoading(false);
//   };

//   return (
//     <form className={styles.form} onSubmit={handleSubmit}>
//       <CardElement className={styles.card} />
//       <button disabled={loading} className={styles.button}>
//         {loading ? 'Processing...' : 'Pay'}
//       </button>
//       {error && <div className={styles.error}>{error}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;
