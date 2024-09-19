import React from 'react';

const Header = ({title}) => {
    
  return (
    <header style={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    textAlign: 'center'
  }
};

export default Header;
