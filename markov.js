class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.chains = {};
    this.makeChains();
  }

  //   /** set markov chains:
  //    *
  //    *  for text of "the cat in the hat", chains will be
  //    *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  // refactor to use maybe find, filter, map or forEach or some other AAmethod
  makeChains() {
    const words = this.words;
    const chains = this.chains;

    // create object make each word from list a key of that object, each keys value is an array full of words that came after the key word
    for (let i = 0; i < words.length; i++) {
      chains[words[i]] = words.filter(function (value, index) {
        return words[i] === words[index - 1];
      });
    }

    // loop over each chain KEY and remove KEYS that have empty arrays
    for (let j = 0; j < Object.keys(chains).length; j++) {
      const keys = Object.keys(chains);
      if (chains[keys[j]].length === 0) {
        delete chains[keys[j]];
      }
    }
    this.chains = chains;
    return chains;
  }

  makeText(numWords = 20) {
    // get all start words, select a random first word,
    let startWords = Object.keys(this.chains);
    let currentWord = startWords[Math.floor(Math.random() * (startWords.length - 1))];

    // create an array to hold all the words, easier to add and remove words as an array
    let result = [];

    // push first random selected word into array
    result.push(currentWord);

    // loop numWords times, each time get the possible next words based on  currentWord value or STATE
    //  select random next word and push to array, set the state to be the next word.
    // repeat until we reach an array that's length = numWords
    for (let i = 0; i < numWords - 1; i++) {
      let possible = this.chains[currentWord];
      let next;
      next = possible[Math.floor(Math.random() * (possible.length - 1))];
      result.push(next);
      currentWord = next;
    }
    // instantiate
    let resultString = "";
    // loop over result array and add each word to the string followed by a space
    for (let i = 0; i < result.length; i++) {
      resultString += result[i] + " ";
    }
    // remove the space at the end of string
    resultString = resultString.slice(0, resultString.length - 1);
    // add a period to the end of the string
    resultString += ".";
    // voila
    return resultString;
  }
}

const test = new MarkovMachine("the cat in the hat and the bat in the rat");
