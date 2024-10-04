import React from 'react';

const Card = ({ card, onClick }) => {
  return (
    <div style={styles.card} onClick={onClick}>
      {card.consent_status=="ACTIVE" ?
      <div className="flex flex-row justify-between">
      <h3>{card.data_provider}</h3>
      <div className='btn btn-xs bg-blue-500 text-white'>철회</div>
    </div>
      :
        
      <div className="flex flex-row justify-center">
      <h3>{card.data_provider}</h3>
      <div className='btn btn-xs bg-slate-200 br'>철회됨</div>
    </div>
}
        
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    cursor: 'pointer'
  }
};

export default Card;
