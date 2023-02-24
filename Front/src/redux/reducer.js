import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacater: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.allCharacater, action.payload],
        allCharacater: [...state.allCharacater, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      const allCharsFiltered = state.allCharacater.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.allCharacater.sort((a, b) => a.id - b.id)
            : state.allCharacater.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
