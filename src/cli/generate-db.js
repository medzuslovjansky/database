const _ = require('lodash');
const { prefix, disambiguate } = require('../../scripts/morphology');

const resources = joinDictionaries({
  en: require('../src/external/steen-en').slice(1),
  pl: require('../src/external/steen-pl').slice(1),
});


function writeDictionary(lang) {

}

function toChromeI18N(lang, entry) {
  return {
    value: lang ? entry.translations[lang] : entry.value,
    description: entry.description,
  };
}

function joinDictionaries(dictionariesMap) {
  const result = {};

  for (const lang of Object.keys(dictionariesMap)) {
    const lines = dictionariesMap[lang];

    for (const entry of lines.map(deserialize)) {
      const id = uniqueId(entry);

      if (result[id]) {
        result[id].translations[lang] = entry.translation;
      } else {
        result[id] = result[id] || {
          value: composeEntryValue(entry),
          description: disambiguate(entry.morphology),
          translations: {
            [lang]: entry
          }
        };
      }
    }
  }
}

function locallyEnumerate(entries) {
  return _.chain(entries)
    .groupBy((entry) => prefix.short(entry.morphology))
    .mapValues((entriesByPartOfSpeech, partOfSpeech) => entriesByPartOfSpeech.map((entry, index) => {
      entry.key = partOfSpeech + '_' + (index + 1);
      return entry;
    }))
    .values()
    .flatten()
    .value();
}

function composeEntryValue(entry) {
    const {words, irregularities} = entry;
    if (irregularities) {
      const note = [
        irregularities.startsWith('(') ? '' : '('
        irregularities
        irregularities.startsWith(')') ? '' : ')'
      ].join('');

      return `${words} ${irregularities}`;
    } else {
      return words;
    }
}

function deserialize(line) {
    const [words, irregularities, morphology, _category, translation] = entry.split('\t');

    return {
      words,
      irregularities,
      morphology,
      translation
    };
}

function uniqueId(entry) {
    return [entry.value, entry.irregularities, entry.morphology].join('\t');
}
