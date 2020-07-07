'use strict';

// Helpers
const { saveData, loadDocument } = require('./helpers');
// Credentials
const credentials = require('./googleSecretFile.json');
// Config
const { spreadsheets } = require('./config');

const skillFactory = () => ({
  id: '',
  skillType: '',
  title: '',
  description: '',
  materials: [],
});

const professionFactory = () => ({
  junior: [],
  middle: [],
  senior: [],
});

const getSkills = async (id) => {
  try {
    const document = await loadDocument(id, credentials);

    const skills = {};

    for (const sheet of document.sheetsByIndex) {
      if (sheet.title !== '__example__') {
        skills[sheet.title] = skillFactory();
        const skill = skills[sheet.title];

        skill.id = String(sheet['_rawProperties'].sheetId);

        const rows = await sheet.getRows();
        rows.forEach((row) => {
          if (row['_rawData'][0]) {
            const rowKey = row['_rawData'][0].trim();
            const rowValue = row['_rawData'][1].trim();
            switch (rowKey) {
              case 'Скилл':
                skill.skillType = rowValue;
                break;
              case 'Название':
                skill.title = rowValue;
                break;
              case 'Описание':
                skill.description = rowValue;
                break;
              case 'Материал':
                break;
              default:
                skill.materials.push({
                  title: rowKey,
                  link: rowValue,
                });
                break;
            }
          }
        });
      }
    }
    return skills;
  } catch (error) {
    console.error(error);
  }
};

const getProfessions = async (professionSpreadsheets, skills) => {
  try {
    const professions = {};

    for (const [title, id] of Object.entries(professionSpreadsheets)) {
      const document = await loadDocument(id, credentials);

      professions[title] = professionFactory();
      const profession = professions[title];

      for (const sheet of document.sheetsByIndex) {
        const grade = sheet.title?.toLowerCase();

        const rows = await sheet.getRows();

        rows.forEach((row) => {
          const skillName = row['_rawData'][0]?.trim();
          const skillId = row['_rawData'][1]?.trim().split('#gid=')[1];

          const skill = skills?.[skillName];

          if (skill && skillId === skill.id) profession[grade].push(skill);
        });
      }
    }
    return professions;
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  try {
    const skillSpreadsheet = spreadsheets.general.skills;
    const skills = await getSkills(skillSpreadsheet);
    await saveData(JSON.stringify(skills), 'skills.json');

    const professionSpreadsheets = spreadsheets.professions;
    const professions = await getProfessions(professionSpreadsheets, skills);
    await saveData(JSON.stringify(professions), 'professions.json');
  } catch (error) {
    console.error('TOP LEVEL ERROR:\n', error);
  }
})();
