import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import './style.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <h1>Dashboard</h1>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
