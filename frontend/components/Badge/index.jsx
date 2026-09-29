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
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    containerType: 'inline-size',
  },
  badge: {
    maxWidth: '90%',
    boxSizing: 'border-box',
    padding: '0.35em 0.7em',
    borderRadius: '0.4em',
    fontSize: 12,
    lineHeight: 1.2,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    overflowWrap: 'anywhere',
    wordBreak: 'break-word',
    backgroundColor: config.bgColor,
    color: config.textColor,
    '@supports (container-type: inline-size)': {
      fontSize: 'clamp(8px, 8cqw, 18px)',
    },
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
        <div className={classes.overlay}>
          <div className={classes.badge}>
            {config.badgeText || 'Sold out'}
          </div>
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
