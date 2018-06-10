import * as mocha from 'mocha';
import * as chai from 'chai';

import RegexLiteral from '../src/RegexLiteral';
import Optional from '../src/Optional';
import Or from '../src/Or';

const expect = chai.expect;
const assert = chai.assert;

describe('Or', () => {

  it('group of regexes', () => {
    const r = new Or(
      RegexLiteral.anyDigit(),
      RegexLiteral.anyLetter().exactAmount(2),
      RegexLiteral.anyLetter().exactAmount(4)
    );
    expect(r.toRegexString()).to.equal('(\\d|[a-zA-Z]{2}|[a-zA-Z]{4})');
  });

});