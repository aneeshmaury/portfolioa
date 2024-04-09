"use client";
// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";

// const words = [
//   "full stack developer",
//   "Mern Stack Developer",
//   "Next.js Developer",
//   "React Native Developer",
//   "UI/UX Designer",
// ];

// const TextChanger = () => {
//   const [index, setIndex] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     controls.start({ opacity: 0, scale: 0.5 }).then(() => {
//       controls.start({ opacity: 1, scale: 1 });
//     });
//   }, [index, controls]);

//   return (
//     <motion.div
//       className="code mt-4 text-2xl font-semibold text-blubg"
//       style={{ overflow: "hidden", whiteSpace: "nowrap" }}
//       animate={controls}
//       initial={{ opacity: 0, x: -20 }}
//       transition={{ duration: 0.5 }}
//     >
//       {words[index]}
//     </motion.div>
//   );
// };

// export default TextChanger;
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const words = [
  "full stack developer",
  "Mern Stack Developer",
  "Next.js Developer",
  "React Native Developer",
  "UI/UX Designer",
];

const TextChanger = () => {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      controls.start({ opacity: 0, scale: 0.5 }).then(() => {
        controls.start({ opacity: 1, scale: 1 });
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, [controls]);

  return (
    <motion.div
      className="code mt-4 text-2xl font-semibold text-blubg text-center  -mr-[19px] "
      style={{ overflow: "hidden", whiteSpace: "normal" }} // Changed whiteSpace to "normal"
      animate={controls}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {words[index]}
    </motion.div>
  );
};

export default TextChanger;
