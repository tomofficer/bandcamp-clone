import { useState } from 'react';
import '../styles/Albums.css';
import slaughterhaus from '../design/images/slaughterhaus.jpeg';
import plausibility from '../design/images/plausibility.jpg';
import Slaughterhaus from './Slaughterhaus';
import Plausibility from './Plausibility';

const Albums = () => {
  //state variables
  const [showAlbum1, setShowAlbum1] = useState(false);
  const [showAlbum2, setShowAlbum2] = useState(false);
  const [showAlbum3, setShowAlbum3] = useState(false);
  const [showAlbum4, setShowAlbum4] = useState(false);
  const [showAlbum5, setShowAlbum5] = useState(false);
  const [showAlbum6, setShowAlbum6] = useState(false);

  //click handlers
  const album1Click = () => {
    setShowAlbum1(!showAlbum1);
  };

  const album2Click = () => {
    setShowAlbum2(!showAlbum2);
  };

  const album3Click = () => {
    setShowAlbum3(!showAlbum3);
  };

  const album4Click = () => {
    setShowAlbum4(!showAlbum4);
  };

  const album5Click = () => {
    setShowAlbum5(!showAlbum5);
  };

  const album6Click = () => {
    setShowAlbum6(!showAlbum6);
  };

  //work on logic to shorten the click handlers and state...
  //use effect section
  //implement dynamic logic so each time an album is clicked or state changes, render new component

  return (
    <div>
      <div className='albums__container'>
        <div className='albums__album-item'>
          <img src={slaughterhaus} alt='' onClick={album1Click} />
        </div>
        <div className='albums__album-item'>
          <img src={plausibility} alt='' onClick={album2Click} />
        </div>
        {showAlbum1 && <Slaughterhaus />}
        {showAlbum2 && <Plausibility />}
      </div>
      <div className='albums__container'>
        <div className='albums__album-item'>
          <img src={slaughterhaus} alt='' onClick={album1Click} />
        </div>
        <div className='albums__album-item'>
          <img src={plausibility} alt='' onClick={album2Click} />
        </div>
        {showAlbum1 && <Slaughterhaus />}
        {showAlbum2 && <Plausibility />}
      </div>
      <div className='albums__container'>
        <div className='albums__album-item'>
          <img src={slaughterhaus} alt='' onClick={album1Click} />
        </div>
        <div className='albums__album-item'>
          <img src={plausibility} alt='' onClick={album2Click} />
        </div>
        {showAlbum1 && <Slaughterhaus />}
        {showAlbum2 && <Plausibility />}
      </div>
      <div className='albums__container'>
        <div className='albums__album-item'>
          <img src={slaughterhaus} alt='' onClick={album1Click} />
        </div>
        <div className='albums__album-item'>
          <img src={plausibility} alt='' onClick={album2Click} />
        </div>
        {showAlbum1 && <Slaughterhaus />}
        {showAlbum2 && <Plausibility />}
      </div>
      <div className='albums__container'>
        <div className='albums__album-item'>
          <img src={slaughterhaus} alt='' onClick={album1Click} />
        </div>
        <div className='albums__album-item'>
          <img src={plausibility} alt='' onClick={album2Click} />
        </div>
        {showAlbum1 && <Slaughterhaus />}
        {showAlbum2 && <Plausibility />}
      </div>
      <div className='albums__container'>
        <div className='albums__album-item'>
          <img src={slaughterhaus} alt='' onClick={album1Click} />
        </div>
        <div className='albums__album-item'>
          <img src={plausibility} alt='' onClick={album2Click} />
        </div>
        {showAlbum1 && <Slaughterhaus />}
        {showAlbum2 && <Plausibility />}
      </div>
    </div>
  );
};

export default Albums;
