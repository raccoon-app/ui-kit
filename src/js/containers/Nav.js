import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { setOpenPage, setActiveArtboard, changeViewMode } from '../actions'
import { getProjectFolders, getProjectName, getActivePage, getOpenPage, getActiveArtboard } from '../reducers/project'
import { getViewMode } from '../reducers/setting'
import NavPageList from '../components/NavPageList'
import NavComponent from '../components/NavComponent'

class NavContainer extends Component {
    render() {
        const { folders, activePage, openPage, activeArtboard, setActiveArtboard, setOpenPage, viewMode } = this.props

        return (
            <NavComponent
                name={this.props.name}
                changeViewMode={this.props.changeViewMode}
                viewMode={viewMode}
            >
                {folders.map(page =>
                    <NavPageList
                        key={page.pageId}
                        pageId={page.pageId}
                        name={page.name}
                        artboards={page.artboards}
                        isActivePage={page.pageId === activePage}
                        isOpenPage={page.pageId === openPage}
                        viewMode={viewMode}
                        activeArtboard={activeArtboard}
                        setActiveArtboard={setActiveArtboard}
                        onNavPageClicked={() => setOpenPage(page.pageId)}
                    />
                )}
            </NavComponent>
        )
    }
}

NavContainer.propTypes = {
    name: PropTypes.string.isRequired,
    folders: PropTypes.arrayOf(PropTypes.shape({
        pageId: PropTypes.string,
        name: PropTypes.string,
        artboards: PropTypes.array
    })),
    activePage: PropTypes.string,
    openPage: PropTypes.string,
    activeArtboard: PropTypes.string,
    viewMode: PropTypes.string,

    setActiveArtboard: PropTypes.func.isRequired,
    setOpenPage: PropTypes.func.isRequired,
    changeViewMode: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        folders: getProjectFolders(state.project),
        name: getProjectName(state.project),
        activePage: getActivePage(state.project),
        activeArtboard: getActiveArtboard(state.project),
        openPage: getOpenPage(state.project),
        viewMode: getViewMode(state.setting)
    }
}

export default connect(
    mapStateToProps,
    { setOpenPage, setActiveArtboard, changeViewMode }
)(NavContainer)
