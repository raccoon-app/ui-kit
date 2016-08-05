import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setOpenPage, setActiveArtboard, setFilter } from '../actions/project';
import { changeViewMode } from '../actions/setting';
import NavPageList from '../components/NavPageList';
import NavComponent from '../components/NavComponent';

class NavContainer extends Component {
    render() {
        const { viewMode, filter } = this.props;

        return (
            <NavComponent
                name={this.props.name}
                viewMode={viewMode}
                filter={filter}
                changeViewMode={this.props.changeViewMode}
                setFilter={this.props.setFilter}
            >
                {this.props.folders.map(page =>
                    <NavPageList
                        key={page.pageId}
                        pageId={page.pageId}
                        name={page.name}
                        artboards={page.artboards}
                        isActivePage={page.pageId === this.props.activePage}
                        isOpenPage={page.pageId === this.props.openPage}
                        viewMode={viewMode}
                        filter={filter}
                        activeArtboard={this.props.activeArtboard}
                        setActiveArtboard={this.props.setActiveArtboard}
                        onNavPageClicked={() => this.props.setOpenPage(page.pageId)}
                    />
                )}
            </NavComponent>
        );
    }
}

NavContainer.propTypes = {
    name: PropTypes.string.isRequired,
    folders: PropTypes.arrayOf(PropTypes.shape({
        pageId: PropTypes.string,
        name: PropTypes.string,
        artboards: PropTypes.array,
    })),
    activePage: PropTypes.string,
    openPage: PropTypes.string,
    activeArtboard: PropTypes.string,
    viewMode: PropTypes.string,
    filter: PropTypes.string,

    setActiveArtboard: PropTypes.func.isRequired,
    setOpenPage: PropTypes.func.isRequired,
    changeViewMode: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ project, setting }) => ({
    folders: project.folders,
    name: project.name,
    activePage: project.activePage,
    activeArtboard: project.activeArtboard,
    openPage: project.openPage,
    filter: project.filter,
    viewMode: setting.viewMode,
});


export default connect(
    mapStateToProps,
    { setOpenPage, setActiveArtboard, changeViewMode, setFilter }
)(NavContainer);
