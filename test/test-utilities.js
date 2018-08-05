const { expect } = require('chai');
const { checkForRequiredFields } = require('../utilities');

console.log("LOG::::", checkForRequiredFields);
describe('checkForRequiredFields', () => {
  it('returns error when name is missing', () => {
    const result = checkForRequiredFields({});

    expect(result).to.contains('Missing `name`')
  })
})