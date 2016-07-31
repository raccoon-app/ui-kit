import { connect } from 'react-redux';
import ProjectSelection from '../components/ProjectSelection';
import { getProjectList } from '../actions/projectSelection';

const mapStateToProps = ({ projectSelection }) => ({ projectSelection });

const mapDispatchToProps = (dispatch) => ({
    getProjectList: () => {
        dispatch(getProjectList());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSelection);