import React from 'react';
import { Box, Text, Anchor } from 'grommet';

function UnknownPage() {
    return (
        <Box height='calc(100vh - 65pt)' align='center' justify='center' >
            <Text color='appBarBackground' weight='700' size='100pt' margin={{left: '20pt', bottom: 'none' }} >idk.</Text>
            <Anchor color='linkColor' href='/' margin='none'>[ back to safety. ]</Anchor>
        </Box>
    );
}

export default UnknownPage;