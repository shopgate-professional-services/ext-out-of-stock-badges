import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import SoldOut from '../../icons/SoldOut';

const styles = {
  wrapper: css({
    position: 'relative',
  }),
  image: css({
    opacity: 0.5,
  }),
  badge: css({
    width: '40%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 99,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
};

/**
 * @param {Object} badgeInfo badge images to display
 * @returns {JSX}
 */
function ComponentProductImage({ show, children }) {
  if (!show) {
    return children;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.badge}>
        <SoldOut />
      </div>
      <div className={styles.image}>
        {children}
      </div>
    </div>
  );
}

ComponentProductImage.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
};

ComponentProductImage.defaultProps = {
  show: false,
};

export default ComponentProductImage;
