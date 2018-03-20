import React, { Component } from 'react';
import Home from './Home'
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import {grey, amber, red} from 'material-ui/colors'
import AppBar from 'material-ui/AppBar'

const muiTheme = createMuiTheme({
	palette: createPalette({
		primary: grey,
		accent: amber,
		error: red,
		type: 'dark'
	})
})
class App extends Component {
  render() {
    return (
<MuiThemeProvider theme={muiTheme}>
    <Home/>

</MuiThemeProvider>
  
    );
  }
}

export default App;
