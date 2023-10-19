import { PortableText } from '@portabletext/react';

import { WhatWeLookForCardComponent } from '../../../../types/componentsTypes';
import Img from '../../../_components/Img';

function WhatWeLookForCards({ cards }: { cards: WhatWeLookForCardComponent[] }) {
  return (
    <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-10 justify-center px-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="w-full max-w-[320px] sm:w-2/3 md:w-2/5 xl:w-2/5 flex flex-col justify-evenly items-center p-4 bg-info rounded-lg mix-blend-screen h-[200px] md:h-[250px] lg:h-[300px]"
        >
          <div className="flex justify-center items-center">
            <Img
              className="w-[85px] h-[85px] lg:w-[152px] lg:h-[152px]"
              image={card?.image}
              width={200}
              height={200}
              alt={card.image?.alt}
            />
          </div>
          <div className="text-center text-white text-xl lg:text-[1.3rem]">
            <PortableText value={card.text} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhatWeLookForCards;
