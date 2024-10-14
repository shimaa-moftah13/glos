import useOrders from "@hooks/useOrders";
import { Loading } from "@components/feedback";
import { Heading } from "@components/common";
import ProductInfo from "@components/eCommerce/ProductInfo/ProductInfo";

import { Table, Modal } from "react-bootstrap";

import styles from "./styles.module.css"

const Orders = () => {
  const {
    loading,
    error,
    orderList,
    showModal,
    selectedProduct,
    viewDetailsHandler,
    closeModalHandler,
  } = useOrders();

  return (
    <>
      <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Products Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct.map((el) => (
            <ProductInfo
              key={el.id}
              title={el.title}
              img={el.img}
              price={el.price}
              quantity={el.quantity}
              direction="column"
              style={{ marginBottom: "10px" }}
            />
          ))}
        </Modal.Body>
      </Modal>
      <div  className={styles.ordersContainer}>
         <h1 className={styles.mainHead}>Personal Information</h1>
      </div>
      
      <Loading status={loading} error={error} type="table">
        
         <Table>
          <thead className={styles.thead}>
            <tr>
              <th>Order Number</th>
              <th>Items</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((el) => (
              <tr key={el.id}>
                <td>#{el.id}</td>
                <td>
                  {el.items.length} item(s)
                  {" / "}
                  <button className={styles.Details}
                    onClick={() => viewDetailsHandler(el.id)}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    Product Details
                  </button>
                </td>
                <td>{el.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </Table>

       
      </Loading>
    </>
  );
};

export default Orders;