class Storage {
  static LOCAL_KEY = 'odin-cv';

  static saveToStorage(content, key) {
    localStorage.setItem(key, JSON.stringify(content));
  }

  static getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}

export default Storage;
