import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';

class App extends React.PureComponent {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="Hello World" />
      </MuiThemeProvider>
    );
  }
}

export default App;
