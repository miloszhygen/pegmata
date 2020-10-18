import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import GlobalStyle from './GlobalStyle';
import Box from './components/Box';
import Button from './components/Button';
import Section from './components/Section';
import Columns from './components/Columns';
import Header from './components/Header';
import Text from './components/Text';
import Image from './components/Image';

import mainImage from './assets/images/mainImage.png';
import mainImageLarge from './assets/images/mainImageLarge.png';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Header />
    <Box mx="auto" my="0" p={[2, 2, 2, 4, 5]}>
      <Image
        src={mainImage}
        width={1}
        objectFit="contain"
        display={['block', 'block', 'none', 'none', 'none']}
        alt="Mom pulling sled"
      />
      <Image
        src={mainImageLarge}
        width={1}
        objectFit="contain"
        display={['none', 'none', 'block', 'block', 'block']}
        alt="Mom pulling sled"
      />
    </Box>
    <Section>
      <Box p={2}>
        <Columns>
          <Columns.Column size={{ xs: 10, sm: 5, md: 2 }}>
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
