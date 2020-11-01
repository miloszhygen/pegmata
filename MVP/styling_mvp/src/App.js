import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import GlobalStyle from './GlobalStyle';
import Box from './components/Box';
import Section from './components/Section';
import Header from './components/Header';
import Image from './components/Image';
import LinkList from './components/LinkList';

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
        <Box display="flex" flexDirection="row" justifyContent="space-between" mt={[4, 4, 5, 5]}>
          <LinkList
            width={[1, 1, 1 / 2]}
            mr={[4, 4, 5, 5, 6]}
            ml={[4, 4, 0]}
            list={[
              {
                href: '#',
                text: 'Slik virker det',
              },
              {
                href: '#',
                text: 'Våre priser',
              },
              {
                href: '#',
                text: 'Se alle modelene våre',
              },
            ]}
          />
          <Image
            width={[0, 0, 1 / 2]}
            src={kidOnSled}
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
