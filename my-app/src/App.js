import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React, { Component } from 'react';
import Home from './components/Home';


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
const frutas = [
  { nombre: 'Piña', color: 'amarillo' },
  { nombre: 'Manzana', color: 'rojo' }, 
  { nombre: 'Uva', color: 'verde' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button>I'm a button</button>
      </header>
    </div>
  );
}

class Homes extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Bienvenido/>
      <Welcome name="Sara"/>
      <App />
      <MyButton/>
      <MyButton/>
      <Profile/>
      <ShoppingList/>
      <Homes/>
      <Fruta
      name={frutas.nombre}
      color={frutas.color}
      />
    </div>
  );
}

function Profile() {
  return (
    <p>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </p>
  );
}

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

class Bienvenido extends Component {
  render () {
    return <h1> ¡Hola Mundo! </h1>;
    
  }
};

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function Fruta(props){
  return (<ul>
           {items.map((item) => <li 
          ={item.id}>{item.name}</li>)}
        </ul>);
           
}

