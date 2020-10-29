import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import GlobalStyle from './GlobalStyle';
import Box from './components/Box';
import Section from './components/Section';
import Header from './components/Header';
import Image from './components/Image';

import mainImage from './assets/images/mainImage.png';
import mainImageLarge from './assets/images/mainImageLarge.png';
import kidOnSled from './assets/images/kidOnSled2.png';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Box mx="auto" my="0" p={[0, 0, 4, 5, 6]}>
      <Header />
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
    <Section>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src={kidOnSled}
          width={'50%'}
          objectFit="contain"
          display={['none', 'none', 'block', 'block', 'block']}
          alt="Mom pulling sled"
        />
      </Box>
    </Section>
    </Box>
  </ThemeProvider>
);

export default App;
