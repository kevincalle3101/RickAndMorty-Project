import { ADD_FAV, REMOVE_FAV,FILTER, ORDER} from "./types";

let initialState= {
 myFavorites: [],
 allCharacters : []
}

const  reducer = (state = initialState, {type, payload})=>{
switch(type){
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

      case REMOVE_FAV:
        return { ...state, myFavorites: payload };
        
        case FILTER : 
        let allCharactersFiltered = state.allCharacters.filter((character) => character.gender === payload)
        return {
            ...state,
            myFavorites: allCharactersFiltered?allCharactersFiltered:state.allCharacters
        }
        case ORDER :
            let allCharactersOrder= [...state.allCharacters]
            return {
                ...state,
                myFavorites: payload==="A"?allCharactersOrder.sort((a,b)=>a.id-b.id)
                :allCharactersOrder.sort((a,b)=>b.id-a.id)
            }
        default:
        return {...state}
}
}

export default reducer;