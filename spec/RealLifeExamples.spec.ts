import * as mocha from 'mocha';
import * as chai from 'chai';

import RegexLiteral from '../src/RegexLiteral';
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
      new RegexSequence('(', RegexLiteral.anyDigit().exactAmount(3), ')-').optional(),
      RegexLiteral.anyDigit().exactAmount(3),
      '-',
      RegexLiteral.anyDigit().exactAmount(4)
    );
    expect(r.toRegexString()).to.equal('(\\(\\d{3}\\)-)?\\d{3}-\\d{4}');
  });

  it('simple email validation', () => { // This isn't a real valid email check - don't use this!
    const r = new RegexSequence(
      Group.or(RegexLiteral.anyDigit(), RegexLiteral.anyLetter(), '.', '+', '(', ')').atLeastAmount(2),
      '@',
      Group.or(RegexLiteral.anyDigit(), RegexLiteral.anyLetter(), '.', '+', '(', ')').atLeastAmount(2),
      '.',
      RegexLiteral.anyLetter().atLeastAmount(2),
      new RegexSequence('.', RegexLiteral.anyLetter().atLeastAmount(2)).optional()
    );
    expect(r.toRegexString()).to.equal('(\\d|[a-zA-Z]|\\.|\\+|\\(|\\)){2,}@(\\d|[a-zA-Z]|\\.|\\+|\\(|\\)){2,}\\.[a-zA-Z]{2,}(\\.[a-zA-Z]{2,})?');
  });

  it('simple IP address validation', () => {
    const r = new RegexSequence(
      RegexLiteral.anyDigit().upToAmount(3), '.',
      RegexLiteral.anyDigit().upToAmount(3), '.',
      RegexLiteral.anyDigit().upToAmount(3), '.',
      RegexLiteral.anyDigit().upToAmount(3),
    );
    expect(r.toRegexString()).to.equal('\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}');
  });

});