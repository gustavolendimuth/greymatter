import PropTypes from 'prop-types';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import parse from 'html-react-parser';
import { toHTML } from '@portabletext/to-html';
import urlFor from '../../../../../utils/urlFor';
import cardImage from '../../../../../img/card-image.png';

export default function HowWeInvestTree({ cards }) {
  const topCircle = 'circle bg-primary text-white rounded-circle d-flex justify-content-center align-items-center';
  const circle = 'circle bg-secondary text-white rounded-circle d-flex justify-content-center align-items-center';
  if (!cards) return null;
  return (
    <div style={ { width: '100%' } }>
      <Tree
        lineWidth="0.4rem"
        lineColor="#0249af"
        lineBorderRadius="20px"
        lineHeight="4rem"
        lineStyle=""
        nodePadding=""
        label={
          <div className={ topCircle }>
            <img src={ cardImage } className="p-2 how-we-invest-card-icon" alt="Deal" />
          </div>
        }
      >
        {
          cards.map((card, index) => (
            <TreeNode
              key={ index }
              label={
                <>
                  <div className="arrow-box" />
                  <div className={ circle }>
                    <img
                      alt={ card?.image?.alt }
                      className="p-2 how-we-invest-card-icon"
                      src={
                        card?.image && urlFor(card.image.imageLg.asset)
                          .size(200)
                          .quality(90)
                          .url()
                      }
                    />
                  </div>
                  <div className="pt-2 how-we-invest-text">
                    { card?.text && parse(toHTML(card?.text)) }
                  </div>
                </>
              }
            />
          ))
        }
      </Tree>
    </div>
  );
}

HowWeInvestTree.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        alt: PropTypes.string,
        imageLg: PropTypes.shape({
          asset: PropTypes.shape({
            _ref: PropTypes.string,
          }),
        }),
      }),
      text: PropTypes.arrayOf(
        PropTypes.shape({
          _key: PropTypes.string,
          _type: PropTypes.string,
          children: PropTypes.arrayOf(
            PropTypes.shape({
              _key: PropTypes.string,
              _type: PropTypes.string,
              marks: PropTypes.arrayOf(
                PropTypes.string,
              ),
              text: PropTypes.string,
            }),
          ),
          markDefs: PropTypes.arrayOf(
            PropTypes.shape({
              _key: PropTypes.string,
              _type: PropTypes.string,
            }),
          ),
          style: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
};
