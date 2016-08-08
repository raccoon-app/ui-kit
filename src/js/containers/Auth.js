import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Auth from '../components/Auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    formLogin(event) {
        event.preventDefault();

        dispatch(login());
    },
    epamLogin(event) {
        event.preventDefault();

        dispatch(login());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
