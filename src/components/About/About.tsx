import Image from 'next/image';
import styles from './AboutUs.module.css';
import React from 'react';
  import falledChicken from '../../../public/assets/falledChicken.png'


const AboutUs: React.FC = () => {



  return (
    <>
    <section className={styles.container}>
      {/* Left Column: Image */}
      <div className={styles.imageContainer}>
        <Image
          src={falledChicken}
          alt="A bucket of delicious fried chicken"
          width={500}
          height={450}
          className={styles.chickenImage}
        />
      </div>

      {/* Right Column: Text and Buttons */}
      <div className={styles.textContainer}>
        <h2 className='maintext' >About Us</h2>
        
        {/* This is the paragraph that will be animated */}
        <p className={styles.description}>
          Pollo Mio Chicken & Sides specialized in serving the tastiest crumb fried chicken using a secret recipe which includes a unique blend of the choicest herbs and spices serving Real Recipe, Real Taste, Real Fried Chicken!
        </p>
        
        
      </div>
      
    </section>
    <div className={styles.buttonGroup}>
          <button className={styles.orderButton}>See Catalogue & Order</button>
          <button className={styles.reserveButton}>Table Reservation</button>
        </div>
        </>
  );
};

export default AboutUs;