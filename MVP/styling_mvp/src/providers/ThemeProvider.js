import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import theme from '../themes/default';

const ThemeProvider = ({ children }) => <Provider theme={theme}>{children}</Provider>;

export default ThemeProvider;
