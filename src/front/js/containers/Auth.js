import { connect } from 'react-redux';
import { login, LOGIN_SERVICES } from '../actions/auth';
import Auth from '../components/Auth';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
    formLogin(event) {
        event.preventDefault();

        dispatch(login(LOGIN_SERVICES.LOCAL));
    },
    epamLogin(event) {
        event.preventDefault();

        dispatch(login(LOGIN_SERVICES.LOCAL));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
