const adjectives = require('./adjectives');
const names = require('./names');
const want = require('./want');
const adverbs = require('./adverbs');
const verbs = require('./verbs');

exports.sentence = sentence = (splitter = ' ') => {
  const random = (max) => {
    return Math.floor(Math.random() * max);
  }

  const randomItem = (array) => {
    return array[random(array.length)];
  }

  const adjective = randomItem(adjectives);
  const name = randomItem(names);
  const wants = randomItem(want);
  const adverb = randomItem(adverbs);
  const verb = randomItem(verbs);

  return [adjective, name, wants, adverb, verb].join(splitter);
}