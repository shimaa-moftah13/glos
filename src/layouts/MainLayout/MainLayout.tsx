import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header, Footer } from "@components/common";

import styles from "./styles.module.css";
const {  wrapper } = styles;

const MainLayout = () => {
  return (
    <Container >
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer  />
    </Container>
  );
};

export default MainLayout;
