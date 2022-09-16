import axios from "axios";
import { GET_All, GET_BY_ID, GET_BY_NAME, GET_TYPE, GET_TYPES, ORDER } from "./ActionType.js";
  

export const getAll = () => {
  return async (dispatch) => {
    let response = await axios.get(`http://localhost:5001/pokemons`);
    dispatch({ type: GET_All, payload: response.data });
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    let response = await axios.get(`http://localhost:5001/types`);
    dispatch({ type: GET_TYPES, payload: response.data });
  };
};

export const getByName = (name) => {
  return async (dispatch) => {
    let response = await axios.get(
      `http://localhost:5001/pokemons?name=${name}`
    );
    dispatch({ type: GET_BY_NAME, payload: response.data });
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    let response = await axios.get(`http://localhost:5001/pokemons/${id}`);
    dispatch({ type: GET_BY_ID, payload: response.data });
  };
};

export function postPokemon(payload){
  console.log(payload)
  return async function(dispatch){
    try {
      const response = await axios.post(`http://localhost:5001/pokemons`, payload)
      console.log(response)
            return response
    } catch (error) {
      console.log(error);
    }
  }
}

export const type = (type) => {
  return (dispatch) => {
    dispatch({type: GET_TYPE, payload: type})
  }
}
export const order = (order) => {
  return (dispatch) => {
    dispatch({type: ORDER, payload: order})
  }
}