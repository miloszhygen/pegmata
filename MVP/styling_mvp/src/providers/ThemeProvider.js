import React from 'react';
import { ThemeProvider as Provider } from 'theme-ui';

import base from '../themes/theme';

const ThemeProvider = ({ children }) => <Provider theme={base}>{children}</Provider>;

export default ThemeProvider;
