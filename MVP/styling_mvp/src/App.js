import React from 'react';
import ThemeProvider from '~providers/ThemeProvider';
import Box from '~components/elements/Box';
import Button from '~components/base/Button';
import Section from '~components/base/Section';

const App = () => (
  <ThemeProvider>
    <Section>
      <Box>
        <Box.Content>
          <Button>yeet</Button>
        </Box.Content>
      </Box>
    </Section>
  </ThemeProvider>
);

export default App;
