import { Component } from "react";
import { connect } from "react-redux";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        //this.props.SetErrors([{ error, info }]);
    }

    render() {
        return this.props.children;
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         SetErrors: (errors) => dispatch(actions.setErrors(errors)),
//     };
// };

export default connect(null, null)(ErrorBoundary);
