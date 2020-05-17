import { IState } from "../../reducers";
import CreateReimbComponent from "./CreateReimbComponent";
import { connect } from "react-redux";
import { CreateReimbAction } from '../../actions/CreateReimb-action';

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    CreateReimbAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReimbComponent);
