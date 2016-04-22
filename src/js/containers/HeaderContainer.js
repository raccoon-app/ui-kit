import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getProjectName} from '../reducers/project'
import Setting from './Setting'


class HeaderContainer extends Component {
    render() {
        return (
            <div className="header">
                <a href="#" className="header__logo">logo</a>
                <h1 className="header__title">{this.props.name}</h1>
                <Setting />
            </div>
        )
    }
}

HeaderContainer.propTypes = {
    name: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        name: getProjectName(state.project)
    }
}

export default connect(
    mapStateToProps,
    {  }
)(HeaderContainer)