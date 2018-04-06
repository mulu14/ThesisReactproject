import React, { Component } from 'react';
import Home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createPalette from 'material-ui/styles/createPalette'
import createMuiTheme from 'material-ui/styles/createMuiTheme'
import ConfigRoute from '../utils/Routing/Routing';




const muiTheme = createMuiTheme({
	palette: {
    primary: {
      light: '#5486ff',
      main: '#5486ff',
      dark: '#5486ff ',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ba000d',
      main: '#ba000d',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      light: "#009900",  
      main: '#009900',
      dark: '#009900',
      contrastText: '#000',
    }
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
