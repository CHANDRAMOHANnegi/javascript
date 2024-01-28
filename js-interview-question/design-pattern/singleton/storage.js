export default class Storage {
    constructor({ key }) {
        this.key = key;
    }

    getStorageData = async (key) => {
        // const keys = Object.keys(localStorage);
        return localStorage;
    };

    set(key, value) {
        localStorage.setItem(key, value);
        return value;
    }

    get(key) {
        return localStorage.getItem(key);
    }

    clearStorage() {
        localStorage.clear();
    }
}


export default class StorageManager {
    storageInstances = {}
    constructor() { }

    static getInstance() {
        if (!this.instance) {
          this.instance = new StorageManager();
        }
        return this.instance;
    }

    addStorageInstance = (key) => {
        const config = {
            key
        }
        const storageInstance = new Storage(config)
        this.storageInstances[key] = storageInstance
        return storageInstance
    }

    clearAllStorage = () => {
        const keys = Object.keys(this.storageInstances)
        keys.forEach(key => {
            this.storageInstances[key].clearStorage()
            delete this.storageInstances[key]
        })
    }
}