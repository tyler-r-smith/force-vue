import Vue from 'vue';
import { EventEmitter } from 'events';
import { Promise } from 'es6-promise';

const speciesCache = Object.create(null);
const species = new EventEmitter();
const speciesBaseUrl = 'species/';
export default species;

species.fetch = id => {
  if (!id) {
    return Promise.resolve('');
  }
  return new Promise((resolve, reject) => {
    if (speciesCache[id]) {
      resolve(speciesCache[id]);
    }
    const speciesToGet = `${speciesBaseUrl}${id}/`;
    Vue.http.get(speciesToGet).then(response => {
      const speciesData = speciesCache[id] = response.data;
      resolve(speciesData);
    }, reject);
  });
};
