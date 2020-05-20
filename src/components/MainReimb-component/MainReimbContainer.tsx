import { IState } from "../../reducers";
import MainReimbComponent from "./MainReimbComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        errorMessage: state.register.errorMessage
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainReimbComponent);
