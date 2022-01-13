import { useState, useEffect } from 'react';
import '../styles/Slider.css';

const Slider = ({ show }) => {
  return (
    <div>
      <div className={show ? 'side-drawer' : 'side-drawer open'}>
        Hello, I'm sliding!
      </div>
    </div>
  );
};

export default Slider;
