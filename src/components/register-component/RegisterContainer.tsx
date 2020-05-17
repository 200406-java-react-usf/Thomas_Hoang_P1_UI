import { IState } from "../../reducers";
import CreateUserComponent from "./RegisterComponent";
import { connect } from "react-redux";
import { CreateUserAction } from '../../actions/register-action';

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
