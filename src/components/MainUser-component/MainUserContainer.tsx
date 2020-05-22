import { IState } from "../../reducers";
import MainUserComponent from "./MainUserComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser?.role,
        errorMessage: state.login.errorMessage
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainUserComponent);
