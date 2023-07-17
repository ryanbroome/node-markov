# MarkovMachine

This project was to build a Markov Machine as a command line tool using Node. We used an algorithm for generating realistic machine-made text from an original source text.

Setup a project, git repo, and a package.json

Implement the Markov Machine

Build the makeText.js Script

Further Study
There are lots of things you could think of to improve your machine; feel free to pick other things:

Algorithmic Things
Have the machine only start on a capitalized word (or better still: a word that starts a sentence); this will give you more realistic output text.

Have the machine stop at a period, while still honoring the maximum number of words passed in.

Right now, the “state” of your Markov chain is a single word. This generates quite random-sounding text. You can get better text if you deal with bigrams — two words at a time. So, you keep track of the two words most recently emitted, and what word could follow that. For the phrase “the cat in the hat is in the hat”, this could look like:

the cat in
cat in the
in the hat, hat
the hat is, null
hat is in
is in the
With longer text, this can produce quite realistic output text.

Node Practice Things
If you give this a URL that returns HTML, you’ll get HTML mixed into the output text. Find a library in NPM that can strip out HTML and use this.
Let the user passing multiple files and/or URLs and make a machine that mixes together that text.
JavaScript Generator Functions
So far, your Markov machines have generated all their text at once. It could be useful, though, to make a machine that generates text on demand, word-by-word, never doing more work than needed.

JavaScript has generator functions which can yield output on demand. This would allow your machine to be asked to produce output word-by-word.

To do this, you’ll need to do some research on generator functions and the yield keyword.
