import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import GlobalStyle from './GlobalStyle';
import Box from './components/Box';
import Button from './components/Button';
import Section from './components/Section';
import Columns from './components/Columns';
import Text from './components/Text';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Section>
      <Box p={2}>
        <Columns>
          <Columns.Column size={{ xs: 10, sm: 5, md: 2 }}>
            <h1>This is a heading</h1>
            <Button>hey</Button>
          </Columns.Column>
          <Columns.Column size="2">
            <Text>And this is a whole bunch of text. SO so sos os so s sos osooo much text. </Text>
            <Button>yeet</Button>
          </Columns.Column>
        </Columns>
      </Box>
    </Section>
  </ThemeProvider>
);

export default App;
