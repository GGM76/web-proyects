import React, { useState } from 'react';

const Home = () => {

    const [count, setCount] = useState(0);
  
    return (
      <div>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Debes de presionarme
          </button>
          <h1>Mi nombre es: Gabriel Garcia Meraz</h1>
        </div>
        <div>
          <img src='QR.jpg' alt='Qr marscolor'></img>
        </div>
        <div>
          <h1>Ocupacion: Tecnico</h1>
        </div>
        <div>
          <h1>Hobbies: jugar basket y videojuegos</h1>
        </div>
        <div>
          <a href="https://www.instagram.com/vertigo760/">Insta</a>
          <a href="https://www.facebook.com/gabriel.g.meraz/">Face</a>
        </div>
      </div>
    );
  };
  
export default Home;