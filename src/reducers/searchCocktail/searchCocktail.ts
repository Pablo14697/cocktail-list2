import { handleActions } from "redux-actions";
import {
  searchCocktailRequest,
  searchCocktailFailure
} from "../../actions/searchCocktail";

export interface searchCocktailInitialState {
  cocktails: object;
  error: string;
}

const searchCocktailInitialState = {
  cocktails: null,
  error: null
};

export default handleActions(
  {
    [searchCocktailRequest as any]: (state, action: any) => ({
      ...state,
      cocktails: action.payload
    }),
    [searchCocktailFailure as any]: (state, action: any) => ({
      ...state,
      error: action.payload
    })
  },
  searchCocktailInitialState
);
