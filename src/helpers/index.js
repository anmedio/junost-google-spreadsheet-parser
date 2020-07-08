'use strict';

// Modules
const path = require('path');
const fs = require('fs').promises;
const { GoogleSpreadsheet } = require('google-spreadsheet');

const getSkillsFromFS = require('./getSkillsFromFS');

const saveData = async (data, filename) => {
  const dataPath = path.resolve(__dirname, '..', 'data', filename);
  await fs.writeFile(dataPath, data);
};

const loadDocument = async (id, credentials) => {
  const document = new GoogleSpreadsheet(id);
  await document.useServiceAccountAuth(credentials);
  await document.loadInfo();
  return document;
};

/**
 * Metaprogrammins is awesome!!!(no)
 * Codegenerator method to generate the getSkillsFromFS method
 */
// const generateGetSkillsFromFSMethod = async () => {
//   try {
//     const skillsPath = path.resolve(__dirname, '..', 'data', 'skills');
//     const files = await fs.readdir(skillsPath);

//     const mainBuffer = [];
//     mainBuffer.push(`'use strict';\n`);

//     const arrayBuffer = [];
//     arrayBuffer.push(`\n\nconst skills = [`);

//     for (const file of files) {
//       const filename = file.split('.')[0];
//       const importString = `\nconst ${filename} = require('../data/skills/${file}');`;
//       mainBuffer.push(importString);
//       arrayBuffer.push(`${filename}, `);
//     }
//     const targetFilePath = path.resolve(__dirname, 'getSkillsFromFS.js');
//     arrayBuffer.push(`];`);
//     const foreachBuffer = `\n\nconst getSkillsFromFS = () => skills;\n\nmodule.exports = getSkillsFromFS;`;
//     const fileData = mainBuffer.concat(arrayBuffer, foreachBuffer);

//     await fs.writeFile(targetFilePath, fileData.join(''));
//   } catch (error) {
//     console.error(error);
//   }
// };

module.exports = {
  saveData,
  loadDocument,
  getSkillsFromFS,
};
