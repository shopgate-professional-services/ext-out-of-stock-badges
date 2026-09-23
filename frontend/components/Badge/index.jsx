import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@shopgate/engage/styles';
import config from '../../config.json';

const useStyles = makeStyles()({
  wrapper: {
    position: 'relative',
  },
  image: {
    opacity: 0.5,
  },
  badge: {
    maxWidth: '80%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 99,
    padding: '8px 16px',
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    backgroundColor: config.bgColor,
    color: config.textColor,
  },
});

/**
 * Wraps a product image and, when the product is out of stock, grays out the
 * image. Unless hidden via configuration, it also overlays a badge with the
 * configurable text.
 * @param {Object} props The component props.
 * @param {boolean} props.show Whether the product is out of stock.
 * @param {JSX} props.children The product image.
 * @returns {JSX}
 */
function Badge({ show, children }) {
  const { classes } = useStyles();

  if (!show) {
    return children;
  }

  return (
    <div className={classes.wrapper}>
      {!config.hideBadge && (
        <div className={classes.badge}>
          {config.badgeText || 'Sold out'}
        </div>
      )}
      <div className={classes.image}>
        {children}
      </div>
    </div>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
};

Badge.defaultProps = {
  show: false,
};

export default Badge;
