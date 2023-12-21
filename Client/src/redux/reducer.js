import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

let initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };

        case REMOVE_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };

        case FILTER:
            let allCharactersCopy = [...state.allCharacters]
            let allCharactersFiltered = allCharactersCopy.filter((character) => character.gender === payload)
            return {
                ...state,
                myFavorites: payload === "All" ? state.allCharacters : allCharactersFiltered
            }
        case ORDER:
            let allCharactersOrder = [...state.allCharacters]
            return {
                ...state,
                myFavorites: payload === "A" ? allCharactersOrder.sort((a, b) => a.id - b.id)
                    : allCharactersOrder.sort((a, b) => b.id - a.id)
            }
        default:
            return { ...state }
    }
}

export default reducer;