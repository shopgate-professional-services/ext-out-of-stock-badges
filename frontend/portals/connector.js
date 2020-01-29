import { connect } from 'react-redux';
import { showBadge } from '../selectors';

/**
 * @param {Object} state state
 * @param {Object} props component props
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  showBadge: showBadge(state, props),
});

export default connect(mapStateToProps);
