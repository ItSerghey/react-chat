import {connect} from 'react-redux';
import LoginPage from '../Pages/LoginPage';
import {bindActionCreators} from 'redux';

import {signup,login} from '../actions';

const mapStateToProps = state => ({
isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
/*   signup:(username,password)=>dispatch(signup(username,password)),
  login:(username,password)=>dispatch(login(username,password)) */
  signup,
  login,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
