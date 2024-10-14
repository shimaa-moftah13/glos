import { memo } from "react";

import styles from "./styles.module.css";
const { heading} = styles;

const Heading = memo(({ title, img }: { title: string, img: string }) => {
  return (
    <h2 className={heading}>
      {title}
      {img}
    </h2>
  );
});

export default Heading;
