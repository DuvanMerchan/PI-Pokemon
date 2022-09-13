import React, { useState } from "react"
import style from './CreatePokemon.module.css';
import { useDispatch, useSelector } from "react-redux"
import { postPokemon } from "../actions/Actions";

function CreatePokemon (){
    const dispatch = useDispatch()
    const tipo = useSelector((store) => store.types)

    const validate = (input) => {
        let errors = {};
        if (!input.name) {
          errors.name = "El name es obligatorio";
        }
    
        return errors;
      };
      

    const [data, setData] = useState({
        name:'',
        img:'',
        hp: 0,
        attack:0,
        defense:0,
        sp_attack:0,
        sp_defense:0,
        speed:0,
        height:0,
        weight:0,
        type: []
    })

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        if (e.target.name !== "name") {
            setData({
              ...data,
              [e.target.name]: Number(e.target.value) <= 0 ? 0 : e.target.value,
            });
          }else {
            setErrors(
              validate({
                ...data,
                [e.target.name]: e.target.value,
              })
            );
            setData({
              ...data,
              [e.target.name]: e.target.value,
            });
          }
    }

    const checkbox = (e) => {
        if (data.type.includes(e.target.value)) {
          console.log('value', e.target.value)
          data.type = data.type.filter((name) => name !== e.target.value);
          console.log('data.type', data.type)
          setData({
            ...data,
            type: data.type,
          });
        } else {
          setData({
            ...data,
            type: [...data.type, e.target.value],
          });
        }
      };
    const submit = async (e) =>{
        e.preventDefault();
        dispatch(postPokemon(data))
        setData({
          name:'',
          img:'',
          hp: 0,
          attack:0,
          defense:0,
          sp_attack:0,
          sp_defense:0,
          speed:0,
          height:0,
          weight:0,
          type: []
      })
    }

    return(
        <div className={style.containerCreate}>
        <form action="POST" className={style.form} onSubmit={submit}>
          <div className={style.separado}>
            <h1>Crea tu propio Pokemon</h1>
            <div>
            <p className={errors.name ? style.danger : style.question}>
              <label>Pokemon name</label>
              <input
                type="text"
                placeholder="pikachu.."
                name="name"
                value={data.name}
                onChange={handleInputChange}
                required
              />
            </p>
            {errors.name ? <p className="danger">{errors.username}</p> : null}
            <p className={style.question}>
              <label>IMG</label>
              <input
                type="text"
                name="img"
                value={data.img}
                onChange={handleInputChange}
              />
            </p>
            <p className={style.question}>
              <label>PS</label>
              <input
                type="number"
                name="hp"
                value={data.hp}
                onChange={handleInputChange}
              />
            </p>
            <p className={style.question}>
              <label>Altura</label>
              <input
                type="number"
                name="height"
                value={data.height}
                onChange={handleInputChange}
              />
            </p>
            <p className={style.question}>
              <label>Peso</label>
              <input
                type="number"
                name="weight"
                value={data.weight}
                onChange={handleInputChange}
              />
            </p>
            </div>
            <div>
                
            <p className={style.question}>
              <label>Ataque</label>
              <input
                type="number"
                name="attack"
                value={data.attack}
                onChange={handleInputChange}
              />
            </p>
            <p className={style.question}>
              <label>Defensa</label>
              <input
                type="number"
                name="defense"
                value={data.defense}
                onChange={handleInputChange}
              />
            </p>
            <p className={style.question}>
              <label>Ataque Especial</label>
              <input
                type="number"
                name="sp_attack"
                value={data.sp_attack}
                onChange={handleInputChange}
              />
            </p>
            <p className={style.question}>
              <label>Defensa Especial</label>
              <input
                type="number"
                name="sp_defense"
                value={data.sp_defense}
                onChange={handleInputChange}
              />
            </p>
            <p className={style.question}>
              <label>Velocidad</label>
              <input
                type="number"
                name="speed"
                value={data.speed}
                onChange={handleInputChange}
              />
            </p>
            </div>
          </div>
  
          <div className={style.hiddenCB}>
            <h1>Tipos</h1>
            <div className={style.tipos}>
              {tipo?.map((t) => (
                <div key={t.id}>
                  <input
                    type="checkbox"
                    name={t.name}
                    value={t.name}
                    id={t.id}
                    onChange={checkbox}
                  />
                  <label htmlFor={t.id}>{t.name}</label>
                  {t.id % 4 === 0 ? <br /> : null}
                </div>
              ))}
              <input type="submit" value="Crear" className={style.submit} />
            </div>
          </div>
        </form>
      </div>
    )

}
export default CreatePokemon