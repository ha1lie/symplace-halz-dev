import React, { Component } from "react";
import { Box, Heading, Button, ResponsiveContext, Layer, Anchor, Text } from 'grommet';
import { FormClose, Github, Twitter, Menu } from "grommet-icons";

const AppBarContainer = (props) => (
    <Box 
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='raisinBlack'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='none'
        style={{ zIndex: '1', position: 'fixed', left: '0px', right: '0px', top: '0px' }}
        height='60px'
        {...props}
    />
);

class AppBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMobileContainer: false,
      showAcivityThread: 'empty'
    };
  }

  render() {
    return (<ResponsiveContext.Consumer>
      {size => (
        <Box fill>
          <AppBarContainer background='appBarBackground' >
            <Box direction='row' align='center' gap='8px'>
              <Anchor href='/'>
                <Heading level='2' margin='none' color='appBarTextColor'>SymPlace</Heading>
              </Anchor>
            </Box>
            {(size === 'small') ? (
                <Button icon={ <Menu color='appBarTextColor' /> } onClick={ () => { this.setState({ showMobileContainer: true }) } } />
            ) : (
                <Box direction='row' pad='horizontal'>
                <Anchor color='appBarTextColor' label='Contact' margin={{left: 'small'}} href='/contact' />
                <Anchor color='appBarTextColor' label='Privacy Policy' margin={{left: 'small'}} href='/privacy' />
              </Box>
            )}
          </AppBarContainer>
          {(size === 'small' && this.state.showMobileContainer) ? ( 
              <Layer animation='fadeIn' background="#00000000">
                  <Box fill background='appBarBackground' tag='header' justify='between' align='center' direction='column' >
                    <Box fill='horizontal' direction='column'>
                      <Box fill='horizontal' elevation='none' justify='between' direction='row' pad={{ left: 'medium', right: 'small', vertical: 'small' }}>
                        <Box direction='row' align='center' gap='8px'>
                          <Heading level='2' margin='none' color='appBarTextColor'>SymPlace</Heading>
                        </Box>
                        <Button plain icon={ <FormClose color='appBarTextColor' size='large' /> } onClick={ () => { this.setState({ showMobileContainer: false }) } } />
                      </Box>
                    </Box>
                    <Box direction='column' align='center'>
                      <Anchor color='appBarTextColor' href='/contact' >
                        <Heading level='1'>Contact</Heading>
                      </Anchor>
                      <Anchor color='appBarTextColor' href='/privacy' >
                        <Heading level='1'>Privacy Policy</Heading>
                      </Anchor>
                    </Box>
                    <Box fill='horizontal' direction='row' pad={{ horizontal: 'large', vertical: 'small'}} align='center' justify='center' gap='36px'>
                      <Anchor color='appBarTextColor' icon={ <Box align='center'><Github color='appBarTextColor' size='large' /><Text>@ha1lie</Text></Box> } href='https://github.com/ha1lie' target='_blank' />
                      <Anchor color='appBarTextColor' icon={ <Box align='center'><Twitter color='appBarTextColor' size='large' /><Text>@h4l1ie</Text></Box> } href='https://twitter.com/h4l1ie' target='_blank' />
                    </Box>
                  </Box>
              </Layer>
            ) : undefined }
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default AppBar;