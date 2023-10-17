import { PortableText } from '@portabletext/react';
import Img from 'app/_components/Img';
import { WhatDoWeOfferCardComponent } from 'types/componentsTypes';

interface WhatDoWeOfferCardsProps {
  cards: WhatDoWeOfferCardComponent[];
}

export default function WhatDoWeOfferCards({ cards }: WhatDoWeOfferCardsProps) {
  if (!cards) return null;

  return (
    <div className="lg:gap-10 justify-center px-10 flex flex-wrap gap-3 md:gap-5 max-w-7xl">
      {
        cards.map((card) => (
          <div key={card.title} className="border-4 items-center flex flex-col rounded-xl border-primary justify-between py-3 px-5 pb-6 text-center md:gap-2 max-w-[320px] w-[260px] d:w-2/5 xl:w-2/5 p-4 h-[220px]">
            <Img
              alt={card.image.alt}
              className="object-cover"
              image={card.image}
              quality={100}
              width={120}
              height={120}
            />
            <p className="text-2xl font-900 text-primary"><PortableText value={card.text} /></p>
          </div>
        ))
      }
    </div>
  );
}
