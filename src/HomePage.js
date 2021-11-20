import React, { Component } from 'react';
import { Box, Text, Image, ResponsiveContext } from 'grommet';

class HomePage extends Component {

  render() {
    return (
      <ResponsiveContext.Consumer>
        { size => (
          <Box flex='grow' align='center' justify='center' >
            <Text>SymPlace</Text>
            <Text>Coming soon to an app near you</Text>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default HomePage;