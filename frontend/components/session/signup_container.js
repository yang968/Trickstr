import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import Signup from './signup';

const mapStateToDispatch = state => ({
  errors: state.errors
})

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser)),
  login: demoUser => dispatch(login(demoUser)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToDispatch, mapDispatchToProps)(Signup);
