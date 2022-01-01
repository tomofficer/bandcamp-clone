import { useState } from 'react';
import '../styles/Albums.css';
import slaughterhaus from '../design/images/slaughterhaus.jpeg';
import plausibility from '../design/images/plausibility.jpg';
import Slaughterhaus from './Slaughterhaus';
import Plausibility from './Plausibility';

const Albums = () => {
  //state variables
  const [showSlaughterhaus, setShowSlaughterhaus] = useState(false);
  const [showPlausibility, setShowPlausibility] = useState(false);

  //click handlers
  const slaughterhausClick = () => {
    setShowSlaughterhaus(!showSlaughterhaus);
  };

  const plausibilityClick = () => {
    setShowPlausibility(!showPlausibility);
  };

  return (
    <div>
      <div className='albums__container'>
        <div className='albums__album-item'>
          <img src={slaughterhaus} alt='' onClick={slaughterhausClick} />
        </div>
        <div className='albums__album-item'>
          <img src={plausibility} alt='' onClick={plausibilityClick} />
        </div>

        {showSlaughterhaus && <Slaughterhaus />}
        {showPlausibility && <Plausibility />}
      </div>
    </div>
  );
};

export default Albums;
