import React from 'react';
import ThemeProvider from './providers/ThemeProvider';
import GlobalStyle from './GlobalStyle';
import Box from './components/Box';
import Section from './components/Section';
import Header from './components/Header';
import Image from './components/Image';
import LinkList from './components/LinkList';
import { H2 } from './components/Heading';
import Text from './components/Text';

import mainImage from './assets/images/mainImage.png';
import mainImageLarge from './assets/images/mainImageLarge.png';
import kidOnSled from './assets/images/kidOnSled2.png';
import manPullingSled from './assets/images/manPullingSled.png';
import skiing from './assets/icons/skiing.svg';
import snow from './assets/icons/snow.svg';
import satisfied from './assets/icons/satisfied.svg';
import dog from './assets/icons/dog-leash.svg';
import Icon from './components/Icon';

const App = () => (
  <ThemeProvider>
    <GlobalStyle />
    <Box mx="auto" my="0" p={[0, 4, 5, 6]}>
      <Header mx={[3, 4, 0, 0]} />
      <Image
        src={mainImage}
        width={1}
        display={['block', 'block', 'none', 'none', 'none']}
        alt="Mom pulling sled"
      />
      <Image
        src={mainImageLarge}
        width={1}
        display={['none', 'none', 'block', 'block', 'block']}
        alt="Mom pulling sled"
      />
      <Box px={[3, 0]}>
        <Section display="flex" flexDirection="row" justifyContent="space-between" mt={[4, 5, 6]}>
          <LinkList
            width={[1, 1, 1 / 2]}
            mr={[0, 5, 5, 6]}
            px={[3, 0]}
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
            width={[0, 1 / 2]}
            src={kidOnSled}
            display={['none', 'block']}
            alt="Mom pulling sled"
          />
        </Section>
        <Section display="flex" flexDirection="row" flexWrap={['wrap', 'nowrap']} mt={[5, 5, 6, 6]}>
          <Image
            width={[3 / 5, 1 / 2]}
            src={manPullingSled}
            alt="Dad pulling sled"
            order={[1, 10]}
            margin="0 auto"
            maxWidth={['100%', '35%']}
          />
          <Box width={[1, 1 / 2]} order={[5, 5, 1]} mt={[4, 0]}>
            <H2>Gjør deg klar til vinteren</H2>
            <Text>
              People with periods deserve safe, effective & sustainable options designed for their
              comfort. Products that work well, feel great, and do good while they&#39;re at it.
            </Text>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              <Box display="flex" flexDirection="row" flex="1 1 50%">
                <Icon mr={[2, 2, 3, 4]} src={satisfied} />
                <Text mr={[2, 3, 3, 4]}>Tekst på to linjer her</Text>
              </Box>
              <Box display="flex" flexDirection="row" flex="1 1 50%">
                <Icon mr={[2, 2, 3, 4]} src={snow} />
                <Text>Tekst på to linjer her</Text>
              </Box>
              <Box display="flex" flexDirection="row" flex="1 1 50%">
                <Icon mr={[2, 2, 3, 4]} src={dog} />
                <Text mr={[2, 3, 3, 4]}>Tekst på to linjer her</Text>
              </Box>
              <Box display="flex" flexDirection="row" flex="1 1 50%">
                <Icon mr={[2, 2, 3, 4]} src={skiing} />
                <Text>Tekst på to linjer her</Text>
              </Box>
            </Box>
          </Box>
        </Section>
      </Box>
    </Box>
  </ThemeProvider>
);

export default App;
