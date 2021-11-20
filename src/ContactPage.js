import React, { Component } from 'react';
import { Box, Text, Paragraph, Anchor, ResponsiveContext } from 'grommet';
import { Github, Twitter, Mail } from 'grommet-icons';
import { FaDiscord } from 'react-icons/fa';

class ContactCard extends Component {
render() {
    return(
    <ResponsiveContext.Consumer>
      { size => (
        <Box margin={{vertical: 'small'}} round='medium' pad='small' background={ this.props.backColor ?? 'offwhite'} direction={ size === 'small' ? 'column' : 'row' } gap={ size === 'small' ? 'small' : '10pt'}>
            <Anchor plain href={ this.props.link } target='_blank' label={
              <Box background='#ffffff20' width={ size === 'small' ? '100vw' : '160pt' } pad='small' round='small' align='center' direction='column'>
                <Text size='30pt' weight='700' color={ this.props.textColor ?? '#444444'}>{ this.props.methodName }</Text>
                { this.props.methodIcon }
              </Box>
            } />
          <Box flex background='#ffffff10' pad='small' round='small' align={size === 'small' ? 'center' : 'start'} direction='column'>
            <Box fill='vertical' />
              <Text size='20pt' weight='600' color={ this.props.textColor ?? '#444444'}>{ this.props.actualContact }</Text>
              <Paragraph flex='grow' textAlign={ size === 'small' ? 'center' : 'start' } weight='400' margin='none' pad='none' color={ this.props.textColor ?? '#444444'}>{ this.props.sellingPoint }</Paragraph>
            </Box>
          </Box>
      )}
    </ResponsiveContext.Consumer>
    );
}
}

class ContactPage extends Component {
  render() {
    return (
      <Box direction='column' flex='grow' margin='medium' style={{ minHeight: 'calc(100vh - 65pt)' }} >
        <Text weight='700' size='200%' textAlign='center' >Contact The Developer Or Get Assistance With Any Method Listed Below</Text>
        <Text weight='600' size='150%' textAlign='center' >Any and all inquiries will be answered in due time, as they are received. If your contact contains bug issues, feature requests, or other techological topics, a response will be prioritized.</Text>
        <ContactCard link='mailto:hallie@halz.dev' backColor='polishedPine' textColor='white' methodName='Email' methodIcon={ <Mail size='large' color='white' /> } actualContact='hallie@halz.dev' sellingPoint='Best for business inquiries, and opportunities to work with me' />
        <ContactCard link='https://discord.com' backColor='rubyPink' textColor='white' methodName='Discord' methodIcon={ <FaDiscord color='white' size='38pt' /> } actualContact='hallie#8192' sellingPoint='Best for questions, comments, and concerns about what I do and who I am' />
        <ContactCard link='https://twitter.com/h4l1ie' backColor='polishedPine' textColor='white' methodName='Twitter' methodIcon={ <Twitter size='large' color='white' /> } actualContact='@h4l1ie' sellingPoint='Best to stay up to date on my work and my thoughts' />
        <ContactCard link='https://github.com/ha1lie' backColor='rubyPink' textColor='white' methodName='Github' methodIcon={ <Github size='large' color='white' /> } actualContact='@ha1lie' sellingPoint='Best to learn from what I do, and make some suggestions to help me out' />
      </Box>
    );
  }
}

export default ContactPage;