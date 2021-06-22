import React from "react";

import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return <section className={classes.summary}>
        <h2>Delicious Food, Delivered to You</h2>
        <p>
            Choose your favorite meal from our broad slection of available meals and enjoy a delicious lunch or dinenr at home.
        </p>
        <p>
            All of our meals are cooked with high-quality ingredients, fully organic, no msg and all that shizzaz
        </p>
    </section>;
}

export default MealsSummary;