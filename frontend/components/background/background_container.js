import { connect } from 'react-redux';
import Background from './background';

const mapStateToProps = state => ({
  pathname: this.props.location.pathname
});

export default connect(mapStateToProps)(Background);
