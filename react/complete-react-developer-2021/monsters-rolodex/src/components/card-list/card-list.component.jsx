import React from "react";

import styles from "./card-list.styles.module.scss";

export const CardList = (props) => {
    console.log("CardList Props: ", props);
    return <div className={styles["card-list"]}>
        {props.children}
    </div>
}

export default CardList