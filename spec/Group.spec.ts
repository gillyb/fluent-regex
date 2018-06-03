import * as mocha from 'mocha';
import * as chai from 'chai';

import { RegexLiteral } from '../src/RegexLiteral';
import Optional from '../src/Optional';
import Group from '../src/Group';

const expect = chai.expect;
const assert = chai.assert;

describe('Group', () => {

  it('simple named group', () => {
    const r = new Group(RegexLiteral.anyDigit().atLeastAmount(2), 'group1').optional();
    expect(r.toRegexString()).to.equal('(?<group1>\\d{2,})?');
  });
  
  it('non capturing group', () => {
    const r = Group.nonCapturing(RegexLiteral.anyWhitespace().zeroOrMore());
    expect(r.toRegexString()).to.equal('(?:\\s*)');
  });

});