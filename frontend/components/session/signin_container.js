import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Signin from './signin';

const mapStateToDispatch = state => ({
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  login: (formUser) => dispatch(login(formUser))
})

export default connect(mapStateToDispatch, mapDispatchToProps)(Signin);
