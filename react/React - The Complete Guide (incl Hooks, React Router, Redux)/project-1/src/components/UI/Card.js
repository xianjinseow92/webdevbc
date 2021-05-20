import React from "react";

import styles from "./Card.module.scss";

const Card = props => {
    
    /**
     * Component serves as a wrapper to style items
     */

    return (
        <div className={styles.card}>
            {props.children}
        </div>
    )
}


export default Card;