import { memo } from "react";
import { Form, Button } from "react-bootstrap";
import { TProduct } from "@types";
import styles from "./styles.module.css";


type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({
    id,
    title,
    img,
    price,
    max,
    quantity,
    changeQuantityHandler,
    removeItemHandler,
  }: CartItemProps) => {
    // render option list
    const renderOptions = Array(max)
      .fill(0)
      .map((_, idx) => {
        const quantity = ++idx;
        return (
          <option value={quantity} key={quantity}>
            {quantity}
          </option>
        );
      });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const quantity = +event.target.value;
      changeQuantityHandler(id, quantity);
    };

    return (
      <>
        <div className={styles.cartContainer}>
          <table className={styles.cartTable}>
            <tbody>
              <tr>
                <td>
                  <img src={img} alt={title} className={styles.cartImage} />
                </td>
                <td>{title}</td>
                <td>{price}</td>
                <td>
                  <div className={styles.quantityContainer}>
                    <span>Quantity</span>
                    <Form.Select value={quantity} 
                    onChange={changeQuantity}
                    className={styles.quantitySelect}>
                      {renderOptions}
                    </Form.Select>
                  </div>
                </td>
                <td className={styles.totalPrice}>
                  <p>98472947</p>
                </td>
                <td className={styles.removeButton}>
                  <Button
                    variant="secondary"
                    style={{ color: "white", width: "100px" }}
                    onClick={() => removeItemHandler(id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
);

export default CartItem;
