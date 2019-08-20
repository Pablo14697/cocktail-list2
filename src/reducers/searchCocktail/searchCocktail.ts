import { handleActions } from "redux-actions";
import {
  searchCocktailRequest,
  searchCocktailFailure
} from "../../actions/searchCocktail";

export interface searchCocktailInitialState {
  cocktails: object;
  loginError: string;
}

const searchCocktailInitialState = {
  cocktails: null,
  error: null
};

export default handleActions(
  {
    [searchCocktailRequest as any]: (state, action: any) => ({
      ...state,
      cocktails: action.payload,
      error: null
    }),
    [searchCocktailFailure as any]: (state, action: any) => ({
      ...state,
      cocktails: null,
      error: action.error
    })
  },
  searchCocktailInitialState
);
