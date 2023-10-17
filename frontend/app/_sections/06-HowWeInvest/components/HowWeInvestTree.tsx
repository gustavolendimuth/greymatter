'use client';

import { PortableText } from '@portabletext/react';
import Img from 'app/_components/Img';
import { Tree, TreeNode } from 'react-organizational-chart';
import { HowWeInvestCardComponent } from 'types/componentsTypes';
import { ImageType } from 'types/propertiesTypes';

interface HowWeInvestTreeProps {
  cards: HowWeInvestCardComponent[];
  firstCard: ImageType;
}

export default function HowWeInvestTree({ cards, firstCard }: HowWeInvestTreeProps) {
  if (!cards || !firstCard) return null;

  return (
    <div className="w-full">
      <Tree
        lineWidth="0.2rem"
        lineColor="#7fa0ad"
        lineBorderRadius="1.5rem"
        lineHeight="5.5rem"
        lineStyle=""
        nodePadding=""
        label={
          <div className="rounded-lg flex justify-center">
            <Img
              image={firstCard}
              width={160}
              height={160}
              className="object-cover"
              alt="Deal"
            />
          </div>
        }
      >
        {cards.map((card, index) => (
          <TreeNode
            key={index}
            label={
              <div className="arrow-box flex justify-center items-center">
                <div className="max-w-[200px] flex justify-center flex-col items-center">
                  <Img
                    alt={card?.image?.alt || ''}
                    className="object-cover"
                    image={card?.image}
                    width={112}
                    height={112}
                  />
                  <div className="pt-2 text-lg md:text-xl text-primary">
                    {
                      card?.text && <PortableText value={card.text} />
                    }
                  </div>
                </div>
              </div>
            }
          />
        ))}
      </Tree>
    </div>
  );
}
