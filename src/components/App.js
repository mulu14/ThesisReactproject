import React, { Component } from 'react';
import Home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'

const muiTheme = createMuiTheme({
	palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
		},
	}
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
