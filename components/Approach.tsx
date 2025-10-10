// import React from 'react';
// import { FocusCards } from "./ui/FocusCards";

// const Approach = () => {
//   const cards = [
//     {
//       title: "Problem Planning and Strategy",
//       src: "/Planning_Strategy.png",
//       desc: "I will work closely with you to define the website's objectives, target audience, and key features. This phase will involve determining the site structure, navigation, and content requirements."
//     },
//     {
//         title: "Design and Code",
//         src: "/designAndCode.png",
//         desc: "Once the strategy is finalized, I will proceed with the design and development of the website, translating your vision into functional code. Throughout this phase, I will keep you informed of my progress."
//     },
//     {
//         title: "Deploy and Maintain",
//         src: "/deployAndMaintain.png",
//         desc: "After completing the development, I will deploy the website and ensure its optimal performance. Additionally, I will offer ongoing maintenance and support as necessary."
//     }
//   ];

//   return (
//     <div className='py-20' id='skills'>
//       <h1 className='heading flex justify-center items-center lg:text-5xl font-bold'>
//         My
//         <span className='text-purple-300'>&nbsp;Approach</span>
//       </h1>
//       <div className='w-full mt-12 flex justify-center'>
//         <FocusCards cards={cards} />
//       </div>
//     </div>
//   );
// };

// export default Approach;


// Approach.tsx
import React from 'react';
import { FocusCards } from "./ui/FocusCards";

const Approach = () => {
  const cards = [{
      title: "Problem Planning and Strategy",
      src: "/Planning_Strategy.png",
      desc: "I will work closely with you to define the website's objectives, target audience, and key features. This phase will involve determining the site structure, navigation, and content requirements."
    },
    {
        title: "Design and Code",
        src: "/designAndCode.png",
        desc: "Once the strategy is finalized, I will proceed with the design and development of the website, translating your vision into functional code. Throughout this phase, I will keep you informed of my progress."
    },
    {
        title: "Deploy and Maintain",
        src: "/deployAndMaintain.png",
        desc: "After completing the development, I will deploy the website and ensure its optimal performance. Additionally, I will offer ongoing maintenance and support as necessary."
    }
  ];

  return (
    <div className='py-20 px-4' id='skills'>
      <h1 className='heading flex justify-center items-center text-4xl lg:text-5xl font-bold'>
        My
        <span className='text-purple-300'>&nbsp;Approach</span>
      </h1>
      <div className='w-full mt-12'>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
};

export default Approach;
