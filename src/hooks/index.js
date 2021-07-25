import React from 'react';
import PropTypes from 'prop-types';

import { MenuProvider } from './menu';

// Wrapping the application with all Contexts
const AppProvider = ({ children }) => (
  <MenuProvider>{children}</MenuProvider>
);

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppProvider;