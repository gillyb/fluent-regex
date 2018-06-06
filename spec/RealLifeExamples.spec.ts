import * as mocha from 'mocha';
import * as chai from 'chai';

import { RegexLiteral } from '../src/RegexLiteral';
import Optional from '../src/Optional';
import Or from '../src/Or';
import RegexSequence from '../src/RegexSequence';
import Group from '../src/Group';

const expect = chai.expect;
const assert = chai.assert;

/**
 * This file is just to check some actual real life examples
 * to see that they 'compile' into the correct regexes we're
 * trying to construct, so we know this library is actually
 * useful.
 */

describe('Real life examples', () => {

  it('american phone number', () => {
    const r = new RegexSequence(
      new RegexSequence(
        new RegexLiteral('('),
        RegexLiteral.anyDigit().exactAmount(3),
        new RegexLiteral(')-')
      ).optional(),
      RegexLiteral.anyDigit().exactAmount(3),
      new RegexLiteral('-'),
      RegexLiteral.anyDigit().exactAmount(4)
    );
    expect(r.toRegexString()).to.equal('((\\(\\d{3}\\)-)?\\d{3}-\\d{4})');
  });

});