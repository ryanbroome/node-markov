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
  // *******************************************

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
    // loop over each object key and delete if it doesn't have any recommended words
    for (let j = 0; j < Object.keys(chains).length; j++) {
      const keys = Object.keys(chains);

      if (chains[keys[j]].length === 0) {
        delete chains[keys[j]];
      }
    }

    this.chains = chains;
    return chains;
  }

  makeText(numWords = 7) {
    //     find all words that can come after that word
    // pick one of those next-words randomly
    // if we picked null, we’ve reached the end of the chain, so stop
    // otherwise, restart at step 1

    const startWords = Object.keys(this.chains);

    let answerArr = [];
    let currentWord;
    let possibleNextWords;

    let firstWordIdx = Math.floor(Math.random() * (this.words.length - 1));

    currentWord = this.words[firstWordIdx];
    possibleNextWords = this.chains[currentWord];

    // let last = answerArr[answerArr.length];

    if (answerArr.length == 0 && numWords > 0) {
      answerArr.push(currentWord);
    }

    function getNextWord(lastWord) {
      let nextWords = this.chains[lastWord];
      let nextWord;

      if (nextWords.length > 0 != undefined) {
        let randIdx = Math.floor(Math.random() * (nextWords.length - 1));
        nextWord = nextWords[randIdx];
        return nextWord;
      } else {
        return;
      }
    }
    // else if (answerArr.length < numWords) {
    // }

    // if (answerArr >= numWords) {
    // }

    return answerArr;
  }
}
const test = new MarkovMachine("the cat in the hat and the bat and the rat");
