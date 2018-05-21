import {connect} from 'react-redux';
import ChatPage from '../Pages/ChatPage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = state => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
