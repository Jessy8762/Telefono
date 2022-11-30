import React from "react";
import { ContactoContext } from "./Context/ContactoProvider";




function DummyComponent2(){
    const {edad,setDummy}=React.useContext(ContactoContext);
    const miFuncion=()=>{
        setDummy("SrEstroncio");
    }
    return(
        <React.Fragment>
            {edad}
           <button onClick={miFuncion}>Da Click Aqui</button>
       </React.Fragment>
    )
}




export default DummyComponent2;