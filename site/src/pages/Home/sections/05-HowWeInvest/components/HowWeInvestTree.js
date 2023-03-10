import PropTypes from 'prop-types';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import parse from 'html-react-parser';
import { toHTML } from '@portabletext/to-html';
import urlFor from '../../../../../utils/urlFor';
import cardImage from '../../../../../img/card-image.png';

export default function StyledTree({ cards }) {
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
                      src={ card?.image && urlFor(card.image.imageLg.asset).url() }
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

StyledTree.propTypes = {
  cards: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
