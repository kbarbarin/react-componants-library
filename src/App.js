import { useState } from 'react';
import './App.css';

import Button from './components/Button/Button';
import Dropdown from './components/DropDownMenu/DropDownMenu';
import PopUp from './components/PopUp/PopUp';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Carousel from './components/Carousel.jsx/Carousel';

function App() {
  const [popUp, setPopUp] = useState(false);

  const items = [
    'https://via.placeholder.com/400x300?text=Image+1',
    'https://via.placeholder.com/400x300?text=Image+2',
    'https://via.placeholder.com/400x300?text=Image+3',
    'https://via.placeholder.com/400x300?text=Image+4',
  ];
  return (
    <div className="App">
      <Button style={{ padding: "15px" }}>Bouton</Button>
      <Dropdown label="Sélectionnez une option" onItemClick={(selectedItem) => { console.log(`Option sélectionnée : ${selectedItem}`); }}>
        <p>Option 1</p>
        <p>Option 2</p>
        <p style={{ color: "red" }}>Option 3</p>
      </Dropdown>
      <Button onClick={() => setPopUp(true)}>Open PopUp</Button>
      {popUp &&
        <PopUp onClose={() => setPopUp(false)}>
          <p style={{ marginBottom: "15px" }}>Ceci est une popUp</p>
        </PopUp>
      }
      <div style={{ marginLeft: "40%", width: "20%" }}>
        <ProgressBar percentage={50} duration={2} showText={true} />
      </div>
      <Carousel items={items} />
    </div>
  );
}

export default App;
