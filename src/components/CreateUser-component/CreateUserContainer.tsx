import { IState } from "../../reducers";
import CreateUserComponent from "./CreateUserComponent";
import { connect } from "react-redux";
import { CreateUserAction } from '../../actions/CreateUser-action';

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    CreateUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserComponent);
