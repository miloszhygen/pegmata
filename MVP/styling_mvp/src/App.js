import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import { H3 } from './components/Heading/Heading';

// Trying to see if the Styled-components headers can pick up styles from theme.styles AND variants
const App = () => (
  <ThemeProvider>
    <H3 variant="text.caps">A simple header</H3>
  </ThemeProvider>
);

export default App;
