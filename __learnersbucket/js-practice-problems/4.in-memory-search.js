class InMemorySearch {
    #store
    constructor() {
        this.#store = new Map()
    }
    addDocuments(key, ...value) {
        if (!this.#store.has(key)) {
            this.#store.set(key, value)
        } else {
            this.#store.set(key, { ...this.#store.get(key), ...value })
        }
    }
    search(key, callback, { key: searchKey, asc }) {
        if (this.#store.has(key)) {
            const list = this.#store.get(key).filter(callback)
            list.sort((a, b) => asc ? a[searchKey] - b[searchKey] : b[searchKey] - a[searchKey])
            return list
        }
    }
};

const searchEngine = new InMemorySearch();

searchEngine.addDocuments(
    'Movies',
    { name: 'Avenger', rating: 8.5, year: 2017 },
    { name: 'Black Adam', rating: 8.7, year: 2022 },
    { name: 'John Wick 4', rating: 8.2, year: 2023 },
    { name: 'Black Panther', rating: 9.0, year: 2022 }
);

console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, { key: 'rating', asc: true }));

// Output
/*
[
  {
    "name": "Black Panther",
    "rating": 9,
    "year": 2022
  },
  {
    "name": "Black Adam",
    "rating": 8.7,
    "year": 2022
  }
]
*/