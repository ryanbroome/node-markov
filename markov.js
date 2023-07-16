/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.chains = {};
    this.makeChains();
    // this.makeChains();
  }

  //    *  for text of "the cat in the hat", chains will be
  //    *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const words = this.words;
    const chains = this.chains;
    for (let i = 0; i < words.length; i++) {
      chains[words[i]] = words.filter(function (value, index) {
        return words[i] === words[index - 1];
      });
    }
    this.chains = chains;
    return chains;
  }

  makeText(numWords = 100) {
    const chains = this.chains;
    let index = Math.floor(Math.random() * this.words.length);
    let keys = Object.keys(chains);
    console.log(keys);
  }
}
