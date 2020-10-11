import React from 'react';
import { ThemeProvider as Provider } from 'theme-ui';

import theme from '../themes/theme';

const ThemeProvider = ({ children }) => <Provider theme={theme}>{children}</Provider>;

export default ThemeProvider;
