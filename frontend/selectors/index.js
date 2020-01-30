import { createSelector } from 'reselect';
import { getProductStock } from '@shopgate/engage/product';

export const showBadge = createSelector(
  getProductStock,
  (stock) => {
    if (!stock) {
      return false;
    }

    return stock.ignoreQuantity === false && stock.quantity <= 0;
  }
);
