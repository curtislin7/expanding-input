import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import App from './App';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Garamond, Times, serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Garamond', 'Times', 'serif'],
      },
    },
    MuiButton: {
      root: {
          textTransform: 'none'
      }
    }
  },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);