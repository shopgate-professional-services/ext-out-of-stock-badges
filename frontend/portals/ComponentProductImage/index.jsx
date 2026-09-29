import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useProductListEntry } from '@shopgate/engage/product';
import Badge from '../../components/Badge';
import { showBadge } from '../../selectors';

/**
 * Wraps every product image via the global `component.product-image` portal. The product is
 * taken from the surrounding product list entry, which every product surface provides — on the
 * PDP it already is the selected variant. Cart thumbnails never get a badge.
 * @param {Object} props The component props.
 * @param {JSX} props.children The product image.
 * @returns {JSX}
 */
function ComponentProductImage({ children }) {
  const { productId, productListType } = useProductListEntry();
  const show = useSelector(state => (
    productListType !== 'cart' && showBadge(state, { productId })
  ));

  return (
    <Badge show={show}>
      {children}
    </Badge>
  );
}

ComponentProductImage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComponentProductImage;
