import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getMarkerColorList, getBackgroundColorList } from '../reducers/setting'
import SettingComponent from '../components/SettingComponent'

const mapStateToProps = (state) => {
    return {
        markerColorList: getMarkerColorList(state.setting),
        backgroundColorList: getBackgroundColorList(state.setting)
    }
}

export default connect(
    mapStateToProps,
    {  }
)(SettingComponent)