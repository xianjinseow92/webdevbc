import React from "react";

import styles from "./FormattedInput.module.scss"

const FormattedInput = props => {
    /**
     * Reusable input component whose label can be customized using props
     * Also allows for data to be passed upwards to parent
     * @param {string} label Label to display what type of data user should be entering 
     * @param {function} getValue Function to pass in to retrieve value from input
     */

    const {label, getValue} = props;

    return (
        <div className={styles["form-control"]}>
            <label htmlFor="textBox">
                {label}
            </label>
            <input type="text" onChange={getValue} id="textBox"/>
        </div>
    )
}

export default FormattedInput;
