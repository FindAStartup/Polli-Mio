import React from 'react';

import styles from "./burger.module.css"

const Burger: React.FC = () => {

  
  return (
      //the 2 burger images are applied in mobile view in CSS and not in HTML
    <div className={styles.background}>
          <h1 className={styles.text}>
            Where Fire Meets Flavor
          </h1>
    </div>
  );
};

export default Burger;