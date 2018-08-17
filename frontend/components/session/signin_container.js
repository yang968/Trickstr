import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import Signin from './signin';

const mapStateToDispatch = state => ({
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  login: (formUser) => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToDispatch, mapDispatchToProps)(Signin);
