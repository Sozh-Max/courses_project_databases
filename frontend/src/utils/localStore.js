class LocalStorageServiceClass {
  constructor(key) {
    this.key = key;
  }

  getLocalStorageData = (key) => {
    const storageData = window.localStorage.getItem(this.key);
    if (!storageData) {
      return null;
    }
    if (key) {
      return JSON.parse(storageData)[key];
    }
    return JSON.parse(storageData);
  };

  setLocalStorageData = (key, data) => {
    const storageData = this.getLocalStorageData();
    if (!storageData) {
      return window.localStorage.setItem(
        this.key,
        JSON.stringify({ [key]: data })
      );
    }
    storageData[key] = data;
    window.localStorage.setItem(this.key, JSON.stringify(storageData));
  };
}

export const LocalStorageService = new LocalStorageServiceClass('myShop');
