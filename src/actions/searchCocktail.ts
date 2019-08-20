import { createAction } from "redux-actions";
import { SEARCH_COCKTAIL_REQUEST, SEARCH_COCKTAIL_FAILURE } from "./types";
import SearchCocktailService from "../provider/searchCocktail/searchCocktailService";

export const searchCocktailRequest = createAction(
  SEARCH_COCKTAIL_REQUEST,
  (cocktails: any) => cocktails.drinks
);

export const searchCocktailFailure = createAction(
  SEARCH_COCKTAIL_FAILURE,
  (error: any) => error
);
export const fetchDrinks = (item: any) => {
  return async (dispatch: any) => {
    try {
      const response = await SearchCocktailService.fetchCocktails(item);

      if (response) {
        dispatch(searchCocktailRequest(response));
      }
    } catch (err) {
      dispatch(searchCocktailFailure(err));
    }
  };
};
