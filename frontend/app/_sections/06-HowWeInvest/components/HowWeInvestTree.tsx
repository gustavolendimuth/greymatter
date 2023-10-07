import { PortableText } from '@portabletext/react';
import Img from 'app/_components/Img';
import { useEffect, useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import { HowWeInvestCard } from 'types/componentsTypes';

interface HowWeInvestTreeProps {
  cards: HowWeInvestCard[];
  firstCard: HowWeInvestCard;
}

export default function HowWeInvestTree({
  cards,
  firstCard,
}: HowWeInvestTreeProps) {
  const [screenSize, setScreenSize] = useState<string | undefined>();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!cards || !firstCard) return null;

  return (
    <div className="w-full">
      <Tree
        lineWidth="0.2rem"
        lineColor="#7fa0ad"
        lineBorderRadius="1.5rem"
        lineHeight={screenSize === 'desktop' ? '5.5rem' : '3.5rem'}
        lineStyle=""
        nodePadding=""
        label={
          <div className="rounded-lg flex justify-center">
            <Img
              image={firstCard?.cardImage?.image}
              width={160}
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
                    alt={card?.cardImage?.alt || ''}
                    className="object-cover"
                    image={card?.cardImage?.image}
                    width={112}
                  />
                  <div className="pt-2 text-lg md:text-xl text-primary">
                    {card?.text && <PortableText value={card.text} />}
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
