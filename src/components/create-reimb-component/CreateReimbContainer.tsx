import { IState } from "../../reducers";
import CreateReimbComponent from "./CreateReimbComponent";
import { connect } from "react-redux";
import { createReimbAction } from '../../actions/CreateReimb-action';

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    createReimbAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReimbComponent);
