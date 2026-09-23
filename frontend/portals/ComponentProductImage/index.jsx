import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useCurrentProduct } from '@shopgate/engage/core';
import { useProductListEntry } from '@shopgate/engage/product';
import Badge from '../../components/Badge';
import BadgeHandledContext from '../../components/Badge/context';
import { showBadge } from '../../selectors';

/**
 * Wraps every product image via the global `component.product-image` portal. The product is
 * resolved from the current product context (PDP, including the selected variant) or, on
 * list-type surfaces (sliders, favorites, grids), from the product list entry context. When the
 * badge is already handled by the outer `product-item.image` portal, the image is rendered
 * untouched to avoid a duplicate badge.
 * @param {Object} props The component props.
 * @param {JSX} props.children The product image.
 * @returns {JSX}
 */
function ComponentProductImage({ children }) {
  const isHandled = useContext(BadgeHandledContext);
  const currentProduct = useCurrentProduct() || {};
  const listEntry = useProductListEntry() || {};
  // Only trust the list entry on real product lists (grids, sliders, favorites).
  // The cart also uses a ProductListEntryProvider but leaves productListType unset,
  // so this keeps the badge off cart thumbnails.
  const listEntryProductId = listEntry.productListType ? listEntry.productId : null;
  const productId = currentProduct.productId || listEntryProductId;
  const variantId = currentProduct.variantId || null;
  const show = useSelector(state => showBadge(state, {
    productId,
    variantId,
  }));

  if (isHandled) {
    return children;
  }

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
