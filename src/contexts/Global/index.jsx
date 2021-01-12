import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = React.createContext({});

const GlobalProvider = ({ children }) => {
  const [period, setPeriod] = useState(null);

  return (
    <GlobalContext.Provider value={{ period, setPeriod }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalProvider };
