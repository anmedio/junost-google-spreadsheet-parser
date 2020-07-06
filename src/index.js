'use strict';

const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./googleSecretFile.json');
const { spreadsheetId } = require('./config');

(async () => {
  try {
    const doc = new GoogleSpreadsheet(spreadsheetId);

    await doc.useServiceAccountAuth(credentials);
    await doc.loadInfo();

    console.info(doc);
  } catch (error) {
    console.error(error);
  }
})();
