import React from 'react';

const SubHeader = ({serviceProvider}) => {
  return (
    <div style={styles.subHeader}>
      <h2>{serviceProvider}</h2>
    </div>
  );
};

const styles = {
  subHeader: {
    backgroundColor: '#555',
    color: '#fff',
    padding: '5px 20px',
    textAlign: 'center'
  }
};

export default SubHeader;
