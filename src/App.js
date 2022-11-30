import './App.css';
import React from 'react';


import Busqueda from './Busqueda/Busqueda';
import Lista from "./Lista/Lista";
import Contacto from "./Contacto/Contacto"
import "./Busqueda/Busqueda.css";
import AgregarAmigo from './AgregarAmigo';
import {ContactoProvider, ContactoContext} from './Context/ContactoProvider';
import ModalAmigo from './ModalAmigo';


function App(){
  
  
   

  return(
    <ContactoProvider>
      <ContactoContext.Consumer>
        {({cantidadAmigos,
        contactosFiltro,
        borrarAmigo,
        modal})=>(
          <React.Fragment>
             <h1 className='textolista'>Mi Lista de Contactos</h1>
       <h3 className='cantamigos'>Tengo {cantidadAmigos} Amigos</h3>
       <Busqueda/>
       <AgregarAmigo/>
       <Lista>
        {
       contactosFiltro.map((contacto)=>
                {
                    return (<Contacto
                      nombre={contacto.nombre}
                      telefono={contacto.telefono}
                      correo={contacto.correo}
                      borrarAmigo={()=>borrarAmigo(contacto.telefono)}/>)
                      })
           }  
       </Lista>
       {contactosFiltro.length===0 && <h1>No tienes amigos 😱😱😱😱😱😱</h1>}
       {modal && <ModalAmigo/>}
       
       </React.Fragment>
        )}
       </ContactoContext.Consumer>
       </ContactoProvider>
  );



}

export default App;
