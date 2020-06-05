import React from 'react';
import ThemeProvider from '~providers/ThemeProvider';
import Box from '~components/elements/Box';
import Button from '~components/base/Button';
import Section from '~components/base/Section';
import Columns from '~components/elements/Columns';

const App = () => (
  <ThemeProvider>
    <Section>
      <Box>
        <Box.Content>
          <Columns>
            <Columns.Column size={{ xs: 10, sm: 5, md: 2 }}>
              <Button>hey</Button>
            </Columns.Column>
            <Columns.Column size="2">
              <Button>yeet</Button>
            </Columns.Column>
          </Columns>
        </Box.Content>
      </Box>
    </Section>
  </ThemeProvider>
);

export default App;
