import { IState } from "../../reducers";
import createUserComponent from "./createUserComponent";
import { connect } from "react-redux";
import { createUserAction } from '../../actions/createUser-action';

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    createUserAction
}

export default connect(mapStateToProps, mapDispatchToProps)(createUserComponent);