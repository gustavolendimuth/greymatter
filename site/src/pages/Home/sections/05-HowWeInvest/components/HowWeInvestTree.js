import PropTypes from 'prop-types';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import parse from 'html-react-parser';
import { toHTML } from '@portabletext/to-html';
import urlFor from '../../../../../utils/urlFor';

export default function HowWeInvestTree({ cards, cardsData: { firstCard } }) {
  if (!cards || !firstCard) return null;

  return (
    <div style={ { width: '100%' } }>
      <Tree
        lineWidth="0.17em"
        lineColor="#7fa0ad"
        lineBorderRadius="1em"
        lineHeight="4em"
        lineStyle=""
        nodePadding=""
        label={
          <div
            className="how-we-invest-first-card rounded-5 d-flex justify-content-center"
          >
            <img
              src={
                firstCard?.cardImage && urlFor(firstCard.cardImage.image.asset)
                  .size(200)
                  .quality(90)
                  .url()
              }
              className="how-we-invest-card-icon img-fluid"
              alt="Deal"
            />
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
                  <div className="how-we-invest-card">
                    <div
                      className="how-we-invest-card-icon-container rounded-5 d-flex justify-content-center"
                    >
                      <img
                        alt={ card?.cardImage?.alt }
                        className="how-we-invest-card-icon img-fluid"
                        src={
                          card?.cardImage && urlFor(card.cardImage.image.asset)
                            .size(200)
                            .quality(90)
                            .url()
                        }
                      />
                    </div>
                    <div className="pt-2 how-we-invest-text">
                      { card?.text && parse(toHTML(card?.text)) }
                    </div>
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
  ),
  cardsBackground: PropTypes.shape({
    image: PropTypes.shape({
      asset: PropTypes.shape({
        _ref: PropTypes.string,
      }),
    }),
  }),
}.isRequired;
