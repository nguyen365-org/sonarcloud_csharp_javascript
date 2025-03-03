const fs = require("fs");

module.exports = (results) => {
  if (results.coverageMap) {
    Object.keys(results.coverageMap).forEach((key) => {
      const normalizedKey = key.replace(/\\/g, "/"); // Replace backslashes with forward slashes
      if (normalizedKey !== key) {
        results.coverageMap[normalizedKey] = results.coverageMap[key];
        delete results.coverageMap[key];
      }
    });
  }
  return results;
};
