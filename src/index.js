'use strict';

const sleep = require('util').promisify(setTimeout);

// Helpers
const { saveData, loadDocument, getSkillsFromFS } = require('./helpers');
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

const getSkills = async (id, credentials) => {
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

const getProfessions = async (professionSpreadsheets, credentials, skills) => {
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

const setSkills = async (id, credentials, skills) => {
  const document = await loadDocument(id, credentials);

  const yellowColor = {
    red: 0.9,
    green: 0.8,
    blue: 0.2,
    alpha: 0.2,
  };

  const greyColor = {
    red: 0.9,
    green: 0.9,
    blue: 0.9,
    alpha: 0.2,
  };

  for (const skill of skills) {
    const sheet = await document.addSheet({
      title: skill.name,
    });

    await sheet.loadCells('A1:B20');

    const a1 = sheet.getCellByA1('A1');
    a1.value = 'Скилл';
    a1.backgroundColor = yellowColor;
    const b1 = sheet.getCellByA1('B1');
    b1.value = 'Hard';

    const a2 = sheet.getCellByA1('A2');
    a2.value = 'Название';
    a2.backgroundColor = yellowColor;
    const b2 = sheet.getCellByA1('B2');
    b2.value = skill.name;

    const a3 = sheet.getCellByA1('A3');
    a3.value = 'Описание';
    a3.backgroundColor = yellowColor;
    const b3 = sheet.getCellByA1('B3');
    b3.value = skill.text;

    const a5 = sheet.getCellByA1('A5');
    a5.value = 'Материал';
    a5.backgroundColor = greyColor;
    const b5 = sheet.getCellByA1('B5');
    b5.value = 'Ссылка';
    b5.backgroundColor = greyColor;

    let linkCellId = 6;
    skill.links.forEach((link) => {
      const linkName = sheet.getCellByA1(`A${linkCellId}`);
      linkName.value = link.name;

      const linkUrl = sheet.getCellByA1(`B${linkCellId}`);
      linkUrl.value = link.url;

      linkCellId++;
    });

    await sheet.saveUpdatedCells();

    console.log(`Skill ${skill.name} has been successfully added`);
    sleep(2000);
  }
};

(async () => {
  try {
    const skillSpreadsheet = spreadsheets.general.skills;
    const skills = await getSkills(skillSpreadsheet, credentials);
    await saveData(JSON.stringify(skills), 'skills.json');
    const professionSpreadsheets = spreadsheets.professions;
    const professions = await getProfessions(
      professionSpreadsheets,
      credentials,
      skills,
    );
    await saveData(JSON.stringify(professions), 'professions.json');

    // const skillsFromFS = getSkillsFromFS();
    // await setSkills(
    //   spreadsheets.general.skills_parsed,
    //   credentials,
    //   skillsFromFS,
    // );
  } catch (error) {
    console.error('TOP LEVEL ERROR:\n', error);
  }
})();
