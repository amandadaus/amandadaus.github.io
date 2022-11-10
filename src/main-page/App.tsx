import React from 'react';

import '../assets/main.scss';
import Button from '../components/button';

function App() {

  const subscribe = () => {
    return (
      <div>
        Subscribe {'&'} Save
      </div>
    )
  };

  const oneTime = () => {
    return(
      <div>
        One Time
      </div>
    )
  }

  return (
    <div className="container">
      <div className="checkout">
        <div className="purchase-type">
          <header>1. Select Purchase Type</header>
          {subscribe()}
          {oneTime()}
        <div className="quantity-section">
          <header className="quantity-header">2. Quantity</header>
          <Button buttonText={'1'}/>
          <Button buttonText={'2'}/>
          <Button buttonText={'3'}/>
        </div>
        </div>
      </div>
        <Button buttonText={`ADD TO CART - ${"39.99"}`}/>
        <div className="guarantee">
          <p>60-day happiness guaranteed</p>
        </div>
    </div>
  );
}

export default App;
