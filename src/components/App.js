import Main from "./Main";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./../redux/actions";
import mapDefaultState from "./../redux/mappers/mapDefaultState";

function mapDispatch(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = withRouter(
  connect(
    mapDefaultState,
    mapDispatch
  )(Main)
);

export default App;
