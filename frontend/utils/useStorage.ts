type UseStorage = {
  setItem: (key: string, value: unknown) => void;
  getItem: (key: string) => unknown;
  removeItem: (key: string) => void;
};

export default (storage: Storage): UseStorage => {
  const setItem = (key: string, value: unknown) => {
    try {
      storage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = (key: string) => {
    try {
      const item = storage.getItem(key);
      if (!item) {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (key: string) => {
    try {
      storage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};
