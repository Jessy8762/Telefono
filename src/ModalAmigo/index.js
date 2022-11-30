import React from "react";
import './ModalAmigo.css';
import {ContactoContext} from "./../Context/ContactoProvider"


function ModalAmigo(){
    
    let {setModal, AgregarAmigo} = React.useContext(ContactoContext);
    let [amigui,setAmigui]=React.useState({
        nombre:"",
        correo:"",
        telefono:""
    });
    const modalCancelar=(event)=>{
        event.preventDefault();
        setModal(false);
    }

    const modalGuardar=(event)=>{
        event.preventDefault();
        AgregarAmigo(amigui);
        setModal(false);
    }


const onChangeNombre=()=>{
    let amiguiTemporal=amigui;
    amiguiTemporal.nombre=event.target.value;
    setAmigui(amiguiTemporal);
}

const onChangeCorreo=()=>{
    let amiguiTemporal=amigui;
    amiguiTemporal.correo=event.target.value;
    setAmigui(amiguiTemporal);
}

const onChangeTelefono=()=>{
    let amiguiTemporal=amigui;
    amiguiTemporal.telefono=event.target.value;
    setAmigui(amiguiTemporal);
}

    return(
        <div className="modal">
            <h1 className="modal_header">Nuevo Amigazo</h1>
            <form className="modal_formulario">
                <input typeof="text" placeholder="Nombre"  onChange={onChangeNombre} />
                <input typeof="text" placeholder="E-mail"  onChange={onChangeCorreo} />
                <input typeof="text" placeholder="Teléfono" onChange={onChangeTelefono} />
                <div>
                <button typeof="submit" onClick={modalGuardar}>Guardar</button>
                <button onClick={modalCancelar}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}









export default ModalAmigo;