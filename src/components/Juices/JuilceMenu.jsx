// // import Image from 'next/image';
// // import styles from './JuiceMenu.module.css';
// // import { mix } from 'framer-motion';

// // const juices = {
// //   strawberry: '/assets/strawberry.png',
// //   kiwi: '/assets/kiwi.png',
// //   orange: '/assets/orange.png',
// //   cherry: '/assets/cherry.png', 
// //   mixfruit: '/assets/mxifruit.png',
// //   strawberrySlices: '/assets/strawberrySlices.png',
// //   kiwiSlice: '/assets/kiwiSlice.png',
// //   orangeSlices: '/assets/orangeSlices.png',
// //   cherrySlices: '/assets/cherrySlices.png',
// //   mixfruitSlices: '/assets/mxifruitSlices.png', 

// // }

// // const JuiceMenu = () => {
// //   return (
// //     <div className={styles.container}>
// //       <Image src="/assets/bg.png" alt="Background" width={1550} height={90} className={styles.backgroundImage} />
// //       <h2 className={styles.title}>Cool Sips, Fresh Flavors</h2>
// //       <div className={styles.grid}>

// //         {/* 1. Cocktail Juice */}
// //         <div className={styles.juiceItem}>
// //           <div className={styles.animationWrapper}>
// //             {/* Falling Strawberries */}
// //             <Image 
// //               src={juices.strawberrySlices} 
// //               alt="" 
// //               width={60} 
// //               height={60} 
// //               className={`${styles.fruit} ${styles.strawberry1}`} 
// //             />
           
// //             {/* Base Juice Image */}
// //             <Image 
// //               src={juices.strawberry} 
// //               alt="Cocktail Juice" 
// //               width={300} 
// //               height={300} 
// //               className={styles.juiceImage} 
// //             />
// //           </div>
// //           <h3>Cocktail Juice</h3>
// //         </div>

// //         {/* 2. Kiwi Juice */}
// //         <div className={styles.juiceItem}>
// //           <div className={styles.animationWrapper}>
// //             {/* Falling Kiwis */}
// //             <Image 
// //               src={juices.kiwiSlice} 
// //               alt="" 
// //               width={70} 
// //               height={70} 
// //               className={`${styles.fruit} ${styles.kiwi1}`} 
// //             />

// //             {/* Base Juice Image */}
// //             <Image 
// //               src={juices.kiwi} 
// //               alt="Kiwi Juice" 
// //               width={300} 
// //               height={300} 
// //               className={styles.juiceImage} 
// //             />
// //           </div>
// //           <h3>Kiwi Juice</h3>
// //         </div>

// //         {/* 3. Orange Juice */}
// //         <div className={styles.juiceItem}>
// //           <div className={styles.animationWrapper}>
// //             {/* Falling Oranges */}
// //             <Image 
// //               src={juices.orangeSlices} 
// //               alt="" 
// //               width={80} 
// //               height={80} 
// //               className={`${styles.fruit} ${styles.orange1}`} 
// //             />

// //             {/* Base Juice Image */}
// //             <Image 
// //               src={juices.orange} 
// //               alt="Orange Juice" 
// //               width={300} 
// //               height={300} 
// //               className={styles.juiceImage} 
// //             />
// //           </div>
// //           <h3>Orange Juice</h3>
// //         </div>

// //         {/* 4. Cherry Juice */}
// //         <div className={styles.juiceItem}>
// //           <div className={styles.animationWrapper}>
// //             {/* Falling Cherries */}
// //             <Image 
// //               src={juices.cherrySlices} 
// //               alt="" 
// //               width={60} 
// //               height={60} 
// //               className={`${styles.fruit} ${styles.cherry1}`} 
// //             />

// //             {/* Base Juice Image */}
// //             <Image 
// //               src={juices.cherry} 
// //               alt="Cherry Juice" 
// //               width={300} 
// //               height={300} 
// //               className={styles.juiceImage} 
// //             />
// //           </div>
// //           <h3>Cherry Juice</h3>
// //         </div>
// //         <div className={styles.juiceItem}>
// //             <div className={styles.animationWrapper}>

// //                  <Image 
// //               src={juices.mixfruitSlices} 
// //               alt="" 
// //               width={60} 
// //               height={60} 
// //               className={`${styles.fruit} ${styles.cherry1}`} 
// //             />
// //                 <Image
// //                 src={juices.mixfruit}
// //                 alt="mixed Fruits juice"
// //                 width={300} 
// //               height={300} 
// //               className={styles.juiceImage} 
// //                 />
// //             </div>
// //            <h3>Mix Fruits</h3>

// //         </div>


// //       </div>
// //     </div>
// //   );
// // };

// // export default JuiceMenu;







// import Image from 'next/image';
// import styles from './JuiceMenu.module.css';

// const juices = {
//   strawberry: '/assets/strawberry.png',
//   kiwi: '/assets/kiwi.png',
//   orange: '/assets/orange.png',
//   cherry: '/assets/cherry.png', 
//   mixfruit: '/assets/mxifruit.png',
//   strawberrySlices: '/assets/strawberrySlices.png',
//   kiwiSlice: '/assets/kiwiSlice.png',
//   orangeSlices: '/assets/orangeSlices.png',
//   cherrySlices: '/assets/cherrySlices.png',
//   mixfruitSlices: '/assets/mxifruitSlices.png', 
// }

// const JuiceMenu = () => {
//   return (
//     <div className={styles.container}>
//       {/* Responsive Background Image */}
//       <div className={styles.backgroundWrapper}>
//         <Image 
//           src="/assets/bg.png" 
//           alt="Background" 
//           fill
//           className={styles.backgroundImage}
//           priority
//         />
//         <h2 className={styles.title}>Cool Sips, Fresh Flavors</h2>
//       </div>

//       {/* Juice Grid - 2 layers layout */}
//       <div className={styles.juiceContainer}>
//         {/* First Layer - 3 items */}
//         <div className={styles.firstLayer}>
//           {/* 1. Cocktail Juice */}
//           <div className={styles.juiceItem}>
//             <div className={styles.animationWrapper}>
//               {/* Falling Strawberries */}
//               <Image 
//                 src={juices.strawberrySlices} 
//                 alt="" 
//                 width={100} 
//                 height={100} 
//                 className={`${styles.fruit} ${styles.strawberry1}`} 
//               />
             
//               {/* Base Juice Image */}
//               <Image 
//                 src={juices.strawberry} 
//                 alt="Cocktail Juice" 
//                 width={300} 
//                 height={300} 
//                 className={styles.juiceImage} 
//               />
//             </div>
//             <h3>Cocktail Juice</h3>
//           </div>

//           {/* 2. Kiwi Juice */}
//           <div className={styles.juiceItem}>
//             <div className={styles.animationWrapper}>
//               {/* Falling Kiwis */}
//               <Image 
//                 src={juices.kiwiSlice} 
//                 alt="" 
//                 width={80} 
//                 height={80} 
//                 className={`${styles.fruit} ${styles.kiwi1}`} 
//               />

//               {/* Base Juice Image */}
//               <Image 
//                 src={juices.kiwi} 
//                 alt="Kiwi Juice" 
//                 width={300} 
//                 height={300} 
//                 className={styles.juiceImage} 
//               />
//             </div>
//             <h3>Kiwi Juice</h3>
//           </div>

//           {/* 3. Orange Juice */}
//           <div className={styles.juiceItem}>
//             <div className={styles.animationWrapper}>
//               {/* Falling Oranges */}
//               <Image 
//                 src={juices.orangeSlices} 
//                 alt="" 
//                 width={80} 
//                 height={80} 
//                 className={`${styles.fruit} ${styles.orange1}`} 
//               />

//               {/* Base Juice Image */}
//               <Image 
//                 src={juices.orange} 
//                 alt="Orange Juice" 
//                 width={300} 
//                 height={300} 
//                 className={styles.juiceImage} 
//               />
//             </div>
//             <h3>Orange Juice</h3>
//           </div>
//         </div>

//         {/* Second Layer - 2 items */}
//         <div className={styles.secondLayer}>
//           {/* 4. Cherry Juice */}
//           <div className={styles.juiceItem}>
//             <div className={styles.animationWrapper}>
//               {/* Falling Cherries */}
//               <Image 
//                 src={juices.cherrySlices} 
//                 alt="" 
//                 width={100} 
//                 height={100} 
//                 className={`${styles.fruit} ${styles.cherry1}`} 
//               />

//               {/* Base Juice Image */}
//               <Image 
//                 src={juices.cherry} 
//                 alt="Cherry Juice" 
//                 width={300} 
//                 height={300} 
//                 className={styles.juiceImage} 
//               />
//             </div>
//             <h3>Cherry Juice</h3>
//           </div>

//           {/* 5. Mix Fruit Juice */}
//           <div className={styles.juiceItem}>
//             <div className={styles.animationWrapper}>
//               <Image 
//                 src={juices.mixfruitSlices} 
//                 alt="" 
//                 width={100} 
//                 height={100} 
//                 className={`${styles.fruit} ${styles.mixfruit1}`} 
//               />
//               <Image
//                 src={juices.mixfruit}
//                 alt="Mixed Fruits juice"
//                 width={300} 
//                 height={300} 
//                 className={styles.juiceImage} 
//               />
//             </div>
//             <h3>Mix Fruits</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JuiceMenu;






















import Image from 'next/image';
import styles from './JuiceMenu.module.css';

const juices = {
  strawberry: '/assets/strawberry.png',
  kiwi: '/assets/kiwi.png',
  orange: '/assets/orange.png',
  cherry: '/assets/cherry.png', 
  mixfruit: '/assets/mxifruit.png',
  strawberrySlices: '/assets/strawberrySlices.png',
  kiwiSlice: '/assets/kiwiSlice.png',
  orangeSlices: '/assets/orangeSlices.png',
  cherrySlices: '/assets/cherrySlices.png',
  mixfruitSlices: '/assets/mxifruitSlices.png', 
}

const JuiceMenu = () => {
  return (
    <div className={styles.container}>
      {/* Responsive Background Image */}
      <div className={styles.backgroundWrapper}>
        <Image 
          src="/assets/bg.png" 
          alt="Background" 
          fill
          className={styles.backgroundImage}
          priority
        />
        <h2 className={styles.title}>Cool Sips, Fresh Flavors</h2>
      </div>

      {/* Juice Grid - Single container that adapts responsively */}
      <div className={styles.juiceGrid}>
        {/* 1. Cocktail Juice */}
        <div className={styles.juiceItem}>
          <div className={styles.animationWrapper}>
            <Image 
              src={juices.strawberrySlices} 
              alt="" 
              width={100} 
              height={100} 
              className={`${styles.fruit} ${styles.strawberry1}`} 
            />
            <Image 
              src={juices.strawberry} 
              alt="Cocktail Juice" 
              width={300} 
              height={300} 
              className={styles.juiceImage} 
            />
          </div>
          <h3>Cocktail Juice</h3>
        </div>

        {/* 2. Kiwi Juice */}
        <div className={styles.juiceItem}>
          <div className={styles.animationWrapper}>
            <Image 
              src={juices.kiwiSlice} 
              alt="" 
              width={80} 
              height={80} 
              className={`${styles.fruit} ${styles.kiwi1}`} 
            />
            <Image 
              src={juices.kiwi} 
              alt="Kiwi Juice" 
              width={300} 
              height={300} 
              className={styles.juiceImage} 
            />
          </div>
          <h3>Kiwi Juice</h3>
        </div>

        {/* 3. Orange Juice */}
        <div className={styles.juiceItem}>
          <div className={styles.animationWrapper}>
            <Image 
              src={juices.orangeSlices} 
              alt="" 
              width={80} 
              height={80} 
              className={`${styles.fruit} ${styles.orange1}`} 
            />
            <Image 
              src={juices.orange} 
              alt="Orange Juice" 
              width={300} 
              height={300} 
              className={styles.juiceImage} 
            />
          </div>
          <h3>Orange Juice</h3>
        </div>

        {/* 4. Cherry Juice */}
        <div className={styles.juiceItem}>
          <div className={styles.animationWrapper}>
            <Image 
              src={juices.cherrySlices} 
              alt="" 
              width={100} 
              height={100} 
              className={`${styles.fruit} ${styles.cherry1}`} 
            />
            <Image 
              src={juices.cherry} 
              alt="Cherry Juice" 
              width={300} 
              height={300} 
              className={styles.juiceImage} 
            />
          </div>
          <h3>Cherry Juice</h3>
        </div>

        {/* 5. Mix Fruit Juice */}
        <div className={styles.juiceItem}>
          <div className={styles.animationWrapper}>
            <Image 
              src={juices.mixfruitSlices} 
              alt="" 
              width={100} 
              height={100} 
              className={`${styles.fruit} ${styles.mixfruit1}`} 
            />
            <Image
              src={juices.mixfruit}
              alt="Mixed Fruits juice"
              width={300} 
              height={300} 
              className={styles.juiceImage} 
            />
          </div>
          <h3>Mix Fruits</h3>
        </div>
      </div>
    </div>
  );
};

export default JuiceMenu;