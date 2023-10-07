import Img from 'app/_components/Img';
import { WhatDoWeOfferCardComponent } from 'types/componentsTypes';

interface WhatDoWeOfferCardProps {
  card: WhatDoWeOfferCardComponent;
}

export default function WhatDoWeOfferCard({
  card: { image, title },
}: WhatDoWeOfferCardProps) {
  if (!image || !title) return null;

  return (
    <div className="border-4 items-center flex flex-col rounded-xl border-primary justify-between py-3 px-5 pb-6 text-center md:gap-2 max-w-[320px] w-[260px] d:w-2/5 xl:w-2/5 p-4 h-[220px]">
      <Img
        alt={image?.alt}
        className="object-cover"
        image={image.imageLg}
        quality={100}
        width={120}
      />
      <p className="text-2xl font-900 text-primary">{title}</p>
    </div>
  );
}
