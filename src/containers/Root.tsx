import React from 'react';
import App from './App';
import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import "typeface-nunito-sans";
import { BrowserRouter } from 'react-router-dom';

const Root: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  palette: {
    secondary: {
      main: '#fa591d'
    },
    primary: {
      main: '#42b549',
    },
  },
  overrides: {
    MuiBottomNavigationAction: {
      label: {
        '&.Mui-selected': {
          fontSize: '0.75rem'
        }
      }
    }
  }
})



export default Root;