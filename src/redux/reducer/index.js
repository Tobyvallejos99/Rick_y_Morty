import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER, } from "../actions/types";

const initialState = {
  myFavorites: [],
  allCharacter:[],
  allFavs:[],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.allCharacter, payload],
        allCharacter: [...state.allCharacter, payload],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((elem) => elem.id !== payload),
      };
    case FILTER:
          const allCharsFiltered= state.allCharacter.filter(char=> char.gender===payload)
          return {...state,
            myFavorites: allCharsFiltered
          } 

    case ORDER:
      return{...state,
      myFavorites:payload==="Ascendente" ? state.allCharacter.sort((a,b)=>a.id-b.id) : state.allCharacter.sort((a,b)=>a.id-b.id)
      }

    default:
      return { ...state };
  }
}
