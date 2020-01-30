import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentProduct } from '@shopgate/engage/core';
import Badge from '../../components/Badge';
import connect from '../connector';

/**
 * @param {Object} showBadge badge images to display
 * @param {Function} children children
 * @returns {JSX}
 */
function ComponentProductImage({ showBadge, children }) {
  return (
    <Badge show={showBadge}>
      {children}
    </Badge>
  );
}

ComponentProductImage.propTypes = {
  children: PropTypes.node.isRequired,
  showBadge: PropTypes.bool.isRequired,
};

export default withCurrentProduct(connect(ComponentProductImage));
