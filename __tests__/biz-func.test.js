import exampleTestFunction from '../src/js/biz-func.js';

describe('deckMessage', () => {
  test('print message to console', () => {
    expect(exampleTestFunction()).toEqual('hi there, from the deck');
  });
});

// SOURCE REPO HAD BIZ LOGIC IN BOTH THE BIZ.JS AND TESTING FILES (AND THE WRONG IMPORT) -- CORRECTED HERE
