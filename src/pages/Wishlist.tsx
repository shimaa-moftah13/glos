import useWishlist from "@hooks/useWishlist";
import { GridList } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";
import bunner from "@assets/pexels-ron-lach-10121693.jpg";
import "../styles/global.css"

const Wishlist = () => {
  const { loading, error, records } = useWishlist();

  return (
    <>
       <div className="banner">
        <img src={bunner} alt="" />
        <h2>Your Shopping Bag</h2>
      </div>
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="Your wishlist is empty"
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;