import { IState } from "../../reducers";
import ReimbComponent from "./ReimbComponent";
import { connect } from "react-redux";
import { createReimbAction } from '../../actions/createReimb-action';

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    createReimbAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ReimbComponent);
