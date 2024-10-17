import useCart from "@hooks/useCart";
// import { Heading } from "@components/common";
import { Loading, LottieHandler } from "@components/feedback";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";
import bunner from "@assets/pexels-ron-lach-10121693.jpg";

import styles from "@components/eCommerce/CartItem/styles.module.css";
// import CheckoutForm from "@components/eCommerce/CheckoutForm/CheckoutForm";
// import StripePayment from "@components/eCommerce/CheckoutForm/StripePayment";
const { banner } = styles;

const Cart = () => {
  const { loading, error, products, changeQuantityHandler, removeItemHandler, userAccessToken, placeOrderStatus } =
    useCart();
  return (
    <>
      <div className={banner}>
        <img src={bunner} alt="" />
        <h2>Your Shopping Bag</h2>
      </div>
      <table className={styles.cartTable}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Details</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
      </table>

      <Loading status={loading} error={error} type="cart">
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice 
            products={products}
            userAccessToken={userAccessToken} />
          </>
        ) : placeOrderStatus === "succeeded" ? (
          <LottieHandler message="Your order has been placed successfully" type="success" />
        ) : (
          <LottieHandler message="Your cart is empty" type="empty" />
        )}
      </Loading>
    </>
  );
};

export default Cart;
