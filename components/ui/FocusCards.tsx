// "use client";

// import React, { useState } from "react";
// import { cn } from "@/lib/utils";

// export const Card = React.memo(
//   ({
//     card,
//     index,
//     hovered,
//     setHovered,
//   }: {
//     card: any;
//     index: number;
//     hovered: number | null;
//     setHovered: React.Dispatch<React.SetStateAction<number | null>>;
//   }) => (
//     <div
//       onMouseEnter={() => setHovered(index)}
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "rounded-4xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
//         hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
//       )}
//     >
//       <img
//         src={card.src}
//         alt={card.title}
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />
//       <div
//         className={cn(
//           "absolute inset-0 bg-black/50 flex flex-col items-start justify-end py-8 px-4 transition-opacity duration-300",
//           hovered === index ? "opacity-100" : "opacity-0"
//         )}
//       >
//         <div className="text-xl md:text-xl font-bold text-white">
//           {card.title}
//         </div>
//         <p className="mt-2 text-white text-base md:text-sm font-normal leading-relaxed">
//           {card.desc}
//         </p>
//       </div>
//     </div>
//   )
// );

// Card.displayName = "Card";

// type Card = {
//   title: string;
//   src: string;
//   desc: string;
// };

// export function FocusCards({ cards }: { cards: Card[] }) {
//   const [hovered, setHovered] = useState<number | null>(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full">
//       {cards.map((card, index) => (
//         <Card
//           key={card.title}
//           card={card}
//           index={index}
//           hovered={hovered}
//           setHovered={setHovered}
//         />
//       ))}
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type CardType = {
  title: string;
  src: string;
  desc: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-4xl relative bg-gray-100 dark:bg-neutral-900 overflow-hidden",
        "w-[320px] h-[420px] transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col items-start justify-end p-6 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl font-bold text-white">{card.title}</div>
        <p className="mt-2 text-white text-sm font-normal leading-relaxed">
          {card.desc}
        </p>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="w-full px-2 md:px-4">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-8
          justify-items-center
          max-w-6xl
          mx-auto
        "
      >
        {cards.map((card, index) => (
          <Card
            key={card.title}
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        ))}
      </div>
    </div>
  );
}
