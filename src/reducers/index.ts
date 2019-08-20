import { combineReducers } from "redux";
import searchCocktail, {
  searchCocktailInitialState
} from "./searchCocktail/searchCocktail";

interface State {
  searchCocktail: searchCocktailInitialState;
}

const State = combineReducers({
  searchCocktail
});

export default State;
