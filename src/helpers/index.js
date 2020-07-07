'use strict';

// Modules
const path = require('path');
const fs = require('fs').promises;
const { GoogleSpreadsheet } = require('google-spreadsheet');

const saveData = async (data, filename) => {
  const dataPath = path.resolve(__dirname, 'data', filename);
  await fs.writeFile(dataPath, data);
};

const loadDocument = async (id, credentials) => {
  const document = new GoogleSpreadsheet(id);
  await document.useServiceAccountAuth(credentials);
  await document.loadInfo();
  return document;
};

module.exports = { saveData, loadDocument };
