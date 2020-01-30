import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../../components/Badge';
import connect from '../connector';

/**
 * @param {Object} badgeInfo badge images to display
 * @returns {JSX}
 */
function ProductItemImage({ showBadge, children }) {
  return (
    <Badge show={showBadge}>
      {children}
    </Badge>
  );
}

ProductItemImage.propTypes = {
  children: PropTypes.node.isRequired,
  showBadge: PropTypes.bool.isRequired,
};

export default connect(ProductItemImage);
