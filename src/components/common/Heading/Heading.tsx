import { memo } from "react";

import styles from "./styles.module.css";
const { heading} = styles;

const Heading = memo(({ title}: { title: string}) => {
  return (
    <h2 className={heading}>
      {title}

    </h2>
  );
});

export default Heading;
