'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './HeroAnimation.module.css';

// Import your assets
import bucket1Img from '../../../public/assets/bucket.png'
;import bucket2Img from '../../../public/assets/bucket2.png';
import chicken1Img from '../../../public/assets/chicken1.png';


const HeroAnimation = () => {
  const lineRefs = useRef([]);
  const bucket1Ref = useRef(null);
  const bucket2Ref = useRef(null);
  const chickenRefs = useRef([]);

  useEffect(() => {
    // --- UPDATED ANIMATION SEQUENCE ---

    // 1. Animate first line and bring in Bucket 1
    setTimeout(() => {
      lineRefs.current[0]?.classList.add(styles.isVisible);
      bucket1Ref.current?.classList.add(styles.isVisible);
      chickenRefs.current.forEach(piece => piece?.classList.add(styles.isVisible));

    }, 500);

    // 2. Animate second line and swap Bucket 1 for Bucket 2
    setTimeout(() => {
      lineRefs.current[1]?.classList.add(styles.isVisible);
      bucket1Ref.current?.classList.remove(styles.isVisible);
      bucket2Ref.current?.classList.add(styles.isVisible);
    }, 1500); // Adjusted timing

    // 3. Animate third line and bring back Bucket 1
     setTimeout(() => {
      lineRefs.current[2]?.classList.add(styles.isVisible);
       bucket2Ref.current?.classList.remove(styles.isVisible);
      bucket1Ref.current?.classList.add(styles.isVisible);
      // Add rotation class to chicken pieces
      chickenRefs.current.forEach(piece => piece?.classList.add(styles.rotated));
    }, 2500);  // Adjusted timing
    
    // // 4. Show the floating chicken and texture
    // setTimeout(() => {
    //   chickenRefs.current.forEach(piece => piece?.classList.add(styles.isVisible));
    // }, 500); // Adjusted timing

  }, []);

  return (
    <main className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          {/* Structure updated for the new layout */}
          <span className={styles.line} ref={el => lineRefs.current[0] = el}>
            ENJOY THE REAL RECIPE,
          </span>
          <span className={styles.line} ref={el => lineRefs.current[1] = el}>
            REAL TASTE,
          </span>
          <span className={styles.line} ref={el => lineRefs.current[2] = el}>
            REAL FRIED CHICKEN.
          </span>
        </h1>
      </div>
      
      {/* The images section remains the same */}
      <div className={styles.heroImages}>
        <Image src={bucket1Img} alt="Bucket of Fried Chicken 1" className={styles.bucket} id={styles.bucket1} ref={bucket1Ref} />
        <Image src={bucket2Img} alt="Bucket of Fried Chicken 2" className={styles.bucket} id={styles.bucket2} ref={bucket2Ref} />
        <Image src={chicken1Img} alt="Fried Chicken Piece 1" className={styles.chickenPiece} ref={el => chickenRefs.current[0] = el} />
         
          
      </div>
    </main> 
  );
};

export default HeroAnimation;