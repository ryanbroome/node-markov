const { MarkovMachine } = require("./markov.js");

describe("class MarkovMachine", function () {
  test("constructor", function () {
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

  test("makeText creates a text string", function () {
    const mm = new MarkovMachine("the cat in the hat");
    const text = mm.makeText();

    expect(text).toEqual(expect.any(String));
    expect(text).toContain("the");
  });

  test("makeChains creates an object", function () {
    const mm = new MarkovMachine("the cat in the hat");
    const chains = mm.makeChains();

    expect(mm).toHaveProperty("chains");
    expect(chains).toEqual(expect.any(Object));
    expect(chains).toHaveProperty("the", ["cat", "hat"]);
  });
});
