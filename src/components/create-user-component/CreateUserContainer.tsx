import { IState } from "../../reducers";
import CreateUserComponent from "./CreateUserComponent";
import { connect } from "react-redux";
import { createUserAction } from '../../actions/CreateUser-action';

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    createUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent);
