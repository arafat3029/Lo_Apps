const getStoredApps = () => {
  const storedAppsSTR = localStorage.getItem("installedApps");

  if (storedAppsSTR) {
    return JSON.parse(storedAppsSTR);
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedAppsData = getStoredApps();

  const convertedId = parseInt(id);

  const exists = storedAppsData.includes(convertedId);

  if (exists) {
    alert("App is already installed.");
  }
   else {
    storedAppsData.push(convertedId);

    localStorage.setItem(
      "installedApps",
      JSON.stringify(storedAppsData)
    );
  }
};

const removeFromStoreDB = (id) => {
  const storedAppsData = getStoredApps();

  const remainingApps = storedAppsData.filter(
    (appId) => parseInt(appId) !== parseInt(id)
  );

  localStorage.setItem(
    "installedApps",
    JSON.stringify(remainingApps)
  );
};

export {addToStoreDB, getStoredApps, removeFromStoreDB };