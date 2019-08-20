import SearchCocktailConfig from "./searchCocktailConfig";

export default class SearchCocktailService {
  static async fetchCocktails(item: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = SearchCocktailConfig.cocktailList(item);
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw Error(response.statusText);
        }

        const data = await response.json();

        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}
