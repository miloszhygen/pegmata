/** @jsx jsx */
import React from 'react';
import { jsx, Styled, Heading } from 'theme-ui';
import { jsx as emotionJsx } from '@emotion/core';
import PropTypes from 'prop-types';

const cloneElement = (element, props) =>
  emotionJsx(element.type, {
    key: element.key,
    ref: element.ref,
    ...element.props,
    ...props,
  });

// TODO: this should be generalized to be for any element, not just header
// maybe with Tag as they do here: https://theme-ui.com/guides/linked-headings
// For this to work, the children needs to be themeUI elements, i.e. use <Link> and not <a>
export const HeadingWrapper = ({ as, children, ...args }) => {
  const elements = React.Children.toArray(children);
  const { variant, ...rest } = args;
  const newChildrenWithProps = elements.map(element =>
    cloneElement(element, { sx: { variant: `${variant}` }, rest }),
  );

  return <Heading as={as}>{newChildrenWithProps}</Heading>;
};

HeadingWrapper.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  args: PropTypes.object,
};

// A little risky to just accept Tag as element but this isnt production code
export const MyHeading = ({ as: Tag, children, ...rest }) => <Tag {...rest}>{children}</Tag>;

MyHeading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  children: PropTypes.node,
};

const H1 = ({ props, children }) => <Styled.h1 {...props}>{children}</Styled.h1>;
const H3 = ({ children, ...rest }) => {
  return <Styled.h3 {...rest}>{children}</Styled.h3>;
};

export { H1, H3 };
