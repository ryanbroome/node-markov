const args = process.argv;
const axios = require("axios");
const fs = require("fs");
const { MarkovMachine } = require("./markov.js");

describe("TEST MarkovMachine methods", function () {
  test("MM constructor TEST", function () {
    const mm = new MarkovMachine("the cat in the hat");
    const text = mm.makeText();
    const chains = mm.makeChains();
    const words = mm.words;

    expect(words).toContain("the");
    expect(chains).toEqual({ cat: ["in"], in: ["the"], the: ["cat", "hat"] });
    expect(text).toContain("the");

    expect(mm).toHaveProperty("words");
    expect(mm).toHaveProperty("chains");

    text == expect.any(String);
    chains == expect.any(Object);
  });

  test("MM makeText TEST ", function () {
    // instantiate needed data using methods being tested
    const mm = new MarkovMachine("the cat in the hat");
    const text = mm.makeText();

    // make expectations against that data
    expect(text).toEqual(expect.any(String));
    expect(text).toContain("the");
  });

  test("MM makeChains TEST", function () {
    const mm = new MarkovMachine("the cat in the hat");
    const chains = mm.makeChains();

    expect(chains).toEqual(expect.any(Object));
    expect(chains).toHaveProperty("the", ["cat", "hat"]);
  });
});
