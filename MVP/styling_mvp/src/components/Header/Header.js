import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Button from '../Button';
import { H1 } from '../Heading';
import { LinkButton } from '../Link';

const Header = ({ bg, ...rest }) => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    bg={bg}
    {...rest}
  >
    <H1>Spark.</H1>
    <div>
      <LinkButton
        display={['none', 'inline-block', 'inline-block', 'inline-block']}
        mr={[1, 2, 2, 3]}
      >
        Logg inn
      </LinkButton>
      <Button>menu</Button>
    </div>
  </Box>
);

Header.propTypes = {
  bg: PropTypes.string,
};

export default Header;
