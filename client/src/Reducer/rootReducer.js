import {
  GET_All,
  GET_BY_ID,
  GET_TYPES,
  GET_BY_NAME,
  ORDER,
  GET_TYPE,
  FILTER,
} from "../Component/actions/ActionType.js";
const initialState = {
  pokemons: [],
  types: [],
  pokemon: {},
  type: "",
  order: "",
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_All:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        pokemon: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case ORDER:
      return {
        ...state,
        order: action.payload,
      };
      case FILTER:
        return {
          ...state,
          pokemons: action.payload,
        };
    default:
      return state;
  }
};
export default rootReducer;
