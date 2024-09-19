import React, { useState } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import LeftNav from './LeftNav';
import CardDetails from './CardDetails';

const Reject = ({title, serviceProvider, share_requests}) => {
  const [cards] = useState(share_requests);

  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div>
      <Header title={title} />
      <SubHeader serviceProvider={serviceProvider}/>
      <div style={styles.container}>
        <LeftNav cards={cards} onCardClick={setSelectedCard} />
        <CardDetails selectedCard={selectedCard} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: 'calc(100vh - 100px)' // Adjust the height to fit header and sub-header
  }
};

export default Reject;
