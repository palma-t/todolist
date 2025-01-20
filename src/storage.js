function populateProjectStorage(key, value) {
  localStorage.setItem(`${key}`, JSON.stringify(value));
}

function getStorageItem(item) {
  try {
    const storedData = localStorage.getItem(item);
    if (storedData) {
      const userObject = JSON.parse(storedData);
      return userObject;
    } else {
      console.log("No data found.");
    }
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
  }
}

export { populateProjectStorage, getStorageItem };
