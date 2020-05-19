import { IState } from "../../reducers";
import NavbarComponent from "./NavbarComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: IState) => {
    return {
        authUser: state.login.authUser,
        username: state.login.authUser?.username
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
