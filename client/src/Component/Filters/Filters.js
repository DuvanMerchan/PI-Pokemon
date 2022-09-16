import React from "react";
import './Filtros.css'
import { useDispatch, useSelector } from "react-redux";
import { order, type } from "../actions/Actions";

 

export const Filters = ()=>{

    const dispatch = useDispatch();

    const tipos = useSelector((store)=>store.types)

    const byTipo = (e) => {
        dispatch(type(e.target.value));
      }
    const orderBy = (e) => {
        dispatch(order(e.target.value))
    }
    return(
        <div className="filtros">
            <div className="select">
            <select className="Ordenar" onChange={byTipo}>
                <option value=''>Tipo:</option>
                {tipos?.map((t)=>(
                    <option value={t.name} key={t.id}>
                        {t.name}
                    </option>
                ))}
            </select>
            <div className="select_arrow"></div></div>
            <div className="select">
            <select className="Ordenar" onChange={orderBy}>
                <option value=''>Ordenar por:</option>
                <option value='a-z'>A-Z</option>
                <option value='z-a'>Z-A</option>
                <option value='attack+'>Ataque+</option>
                <option value='attack-'>Ataque-</option>
                <option value='API'>API</option>
                <option value='DB'>Base de Datos</option>
                
            </select>
            <div className="select_arrow"></div></div>
        </div>
    )
}