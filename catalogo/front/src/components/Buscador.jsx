// import { TfiBasketball } from "react-icons/tfi";
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'

// const Buscador = () => {

//     const [buscar, setBuscar] = useState('')

//     const dispatch = useDispatch()

//     const onSubmit = (e) => {
//         e.preventDefault()
//     }

//     return (
//         <section className="form">
//             <form onSubmit={onSubmit}>
//                 <div className="form-group">
//                    {//} <label htmlFor="texto">Buscar producto</label>
//                    }<input
//                         type="text"
//                         name="texto"
//                         id="texto"
//                         placeholder='Buscar Producto'
//                         value={buscar}
//                         onChange={(e) => setBuscar(e.target.value)}
//                     />
//                     <TfiBasketball />
//                 </div>
//             </form>
//         </section>
//     )
// }
//     height: 28px;
//     text-indent: 20px;
//     border-block: none;
//     /* border-radius: 10px; */
//     width: 85%;
//     box-shadow: 0 0 40px rgba(51, 51, 51, .1);
//     /* border-radius: 10px; */
//     /* box-shadow: none; */
//     border: 2px solid blue;
// export default Buscador

import React, { useState } from 'react';

function Buscador(porps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
       porps.enviarPalabra
}

  return (
    <form className = "form" onSubmit={handleSubmit}>
      <input className='buscar' type="text" value={searchTerm} onChange={handleChange} />
      <button className="buttonbuscar" type="submit">Search</button>
      
    </form>
  );
}

export default Buscador