import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginPage from '../Pages/LoginPage';
import { signup, login } from '../actions';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
