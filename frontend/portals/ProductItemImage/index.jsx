import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Badge from '../../components/Badge';
import BadgeHandledContext from '../../components/Badge/context';
import { showBadge } from '../../selectors';

/**
 * Wraps a product list item image via the `product-item.image` portal. The productId is provided
 * by the portal. It marks the badge as handled so the nested `component.product-image` portal
 * does not render a duplicate badge on the same image.
 * @param {Object} props The component props.
 * @param {string} props.productId The product id of the list item.
 * @param {JSX} props.children The product image.
 * @returns {JSX}
 */
function ProductItemImage({ productId, children }) {
  const show = useSelector(state => showBadge(state, { productId }));

  return (
    <BadgeHandledContext.Provider value>
      <Badge show={show}>
        {children}
      </Badge>
    </BadgeHandledContext.Provider>
  );
}

ProductItemImage.propTypes = {
  children: PropTypes.node.isRequired,
  productId: PropTypes.string,
};

ProductItemImage.defaultProps = {
  productId: null,
};

export default ProductItemImage;
