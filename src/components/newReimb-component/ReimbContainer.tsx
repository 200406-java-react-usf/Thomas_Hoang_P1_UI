import { IState } from "../../reducers";
import ReimbComponent from "./ReimbComponent";
import { connect } from "react-redux";
import { registerAction } from '../../actions/register-action';

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    registerAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ReimbComponent);
