import { URL_API } from "../../../config";

export default class searchCocktailConfig {
  static get endpoint() {
    return `${URL_API}`;
  }

  static cocktailList(item: any) {
    return `${searchCocktailConfig.endpoint}/search.php?s=${item}`;
  }
}
