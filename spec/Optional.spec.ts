import * as mocha from 'mocha';
import * as chai from 'chai';

import { RegexLiteral } from '../src/RegexLiteral';
import Optional from '../src/Optional';

const expect = chai.expect;
const assert = chai.assert;

describe('Optional', () => {

  it('digit', () => {
    const r = new Optional(RegexLiteral.anyDigit());
    expect(r.toRegexString()).to.equal('\\d?');
  });

  it('multiple characters', () => {
    const r = new Optional(RegexLiteral.anyLetter().upToAmount(2));
    expect(r.toRegexString()).to.equal('\[a-zA-Z]{1,2}?');
  });

});