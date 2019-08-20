import { handleActions } from "redux-actions";
import {
  searchCocktailRequest,
  searchCocktailFailure,
  searchCocktailLoading
} from "../../actions/searchCocktail";

export interface SearchCocktailInitialState {
  cocktails: object;
  loading: boolean;
  error: string;
}

const SearchCocktailInitialState = {
  cocktails: null,
  loading: false,
  error: null
};

export default handleActions(
  {
    [searchCocktailRequest as any]: (state, action: any) => ({
      ...state,
      cocktails: action.payload
    }),
    [searchCocktailLoading as any]: (state: any) => ({
      ...state,
      loading: true
    }),
    [searchCocktailFailure as any]: (state, action: any) => ({
      ...state,
      error: action.payload
    })
  },
  SearchCocktailInitialState
);
