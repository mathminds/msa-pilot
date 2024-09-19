import React from 'react';
import Card from './Card';

const LeftNav = ({ cards, onCardClick }) => {
    console.log("cards");
    console.log(cards);
  return (
    <div style={styles.nav}>
      {cards.map((card) => (
        <Card key={card.consent_id} card={card} onClick={() => onCardClick(card)} />
      ))}
    </div>
  );
};

const styles = {
  nav: {
    width: '25%',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    overflowY: 'auto',
    borderRight: '1px solid #ddd',
    height: 'calc(100vh - 100px)' // Adjust height based on header and subheader
  }
};

export default LeftNav;
