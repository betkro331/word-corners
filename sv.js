// lang specific functions needed for parsing in word-worker.js
// can't be written as ES6 exports yet, because of Mozilla
// lacking support for import() in workers, as of Jan 2022.
// instead using importScripts() in the word-worker :)

globals.sv.dictionaries = ['sv-main.txt', 'sv-pronouns.txt'];

globals.sv.pruneWordList = (wordsRaw) => {
  return wordsRaw
    // make words starting with 'i ' into words just starting with 'i'
    // 'i dag' -> 'idag' etc.
    .map(x => x.indexOf('i ') === 0 ? 'i' + x.slice(2) : x)
    // remove words with space (' ')
    .filter(x => !x.includes(' '))
    // remove all one-letter words expect "i", "å", "ö"
    .filter(x => x.length > 1 || "iåö".includes(x))
    // remove words starting with '-'
    .filter(x => x[0] !== '-')
    // remove words ending with '-
    .filter(x => x.slice(-1) !== '-')
}

globals.sv.normalizeChar = (char) => {
  // toUpperCase, then
  // Æ -> Ä, remove diacriticals but
  // do not consider 'ÅÄÖ' diacriticals ;)
  return char.toUpperCase()
    .replace('-', '')
    .replace('Æ', 'AE')
    .replace('Å', 'ao')
    .replace('Ä', 'ae')
    .replace('Ö', 'oe')
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .replace('ao', 'Å')
    .replace('ae', 'Ä')
    .replace('oe', 'Ö');
}