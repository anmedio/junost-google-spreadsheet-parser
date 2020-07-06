'use strict';

const { GoogleSpreadsheet } = require('google-spreadsheet');

const credentials = require('./googleSecretFile.json');
const { spreadsheets } = require('./config');

(async () => {
  try {
    for (const [name, id] of Object.entries(spreadsheets)) {
      const doc = new GoogleSpreadsheet(id);
      await doc.useServiceAccountAuth(credentials);
      await doc.loadInfo();

      console.info(name, doc.title);
    }
  } catch (error) {
    console.error(error);
  }
})();
