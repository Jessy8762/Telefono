import React from "react";
import Busqueda from "../Busqueda/Busqueda";

function Contacto(props){
    function miFuncion() {
        props.borrarAmigo();

    }
    return(
        <div className="cuadrito">
            
            <h2 className="nombreuser">{props.nombre}</h2>
            <p className="nombreuser">
                {props.telefono} - {props.correo}
            </p>
            <button onClick={miFuncion} className="botonborrar">Eliminar</button>
        </div>
    )
}

export default Contacto;