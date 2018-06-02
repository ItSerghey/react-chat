import {connect} from 'react-redux';
import LoginPage from '../Pages/LoginPage';
import {bindActionCreators} from 'redux';

import {signup,login} from '../actions';

const mapStateToProps = state => ({
isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
