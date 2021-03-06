import { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';
import Albums from './components/Albums';
import Footer from './components/Footer';
import Album1 from './components/Album1';
import Album2 from './components/Album2';
import Slider from './components/Slider';
import Backdrop from './components/Backdrop';

function App() {
  //state variables
  const [drawerOpen, setDrawerOpen] = useState(false);

  //click handler
  const drawerToggleClick = () => {
    setDrawerOpen(!drawerOpen);
    console.log('toggling');
  };

  //backdrop logic
  let backdrop;
  if (drawerOpen) {
    backdrop = <Backdrop />;
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Albums toggle={drawerToggleClick} />
        <Slider show={drawerOpen} />
        {backdrop}
        <Footer />
        <Routes>
          <Route path='/album1' element={<Album1 />} />
          <Route path='/album2' element={<Album2 />} />
          <Route path='/album1' element={<Album1 />} />
          <Route path='/album2' element={<Album2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//Notes : need to separate Albums component from header and footer so i can render header and footer at all times.

//look into how to code the slide out panels for each album, slide out from left for left and vice versa for right

//look into where to store audio files appropriately for React apps, src/public?

//look into styling audio/media players for js, is there any options at all?
