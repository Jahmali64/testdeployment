import SwapiModel from './models/swapi.js';
import SearchView from './views/search-view.js';
import ResultsView from './views/results-view.js';
import SearchController from './controllers/search-controller.js';

const swapiModel = new SwapiModel();
const searchView = new SearchView('#search');
const resultsView = new ResultsView('#results');
const searchController = new SearchController(swapiModel, searchView, resultsView);

console.log(swapiModel);
console.log(searchView);
console.log(resultsView);
console.log(searchController);