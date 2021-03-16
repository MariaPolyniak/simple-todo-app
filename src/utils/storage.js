export const storage = {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem(key) {
    const item = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return null;
    }
  },
};
