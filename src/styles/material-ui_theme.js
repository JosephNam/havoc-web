// pulled from https://github.com/takanabe/react-redux-material_ui-boilerplate/blob/master/src/material_ui_raw_theme_file.jsx

import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors'
import { spacing, getMuiTheme } from 'material-ui/styles'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette : {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
}

// Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(lightBaseTheme)
