import * as mocha from 'mocha';
import * as chai from 'chai';

import RegexLiteral from '../src/RegexLiteral';
import RegexSequence from '../src/RegexSequence';
import Group from '../src/Group';
import Or from '../src/Or';

const expect = chai.expect;
const assert = chai.assert;

describe('RegexSequence', () => {

  it('simple sequence', () => {
    const r = new RegexSequence(
      new RegexLiteral('gilly'),
      new RegexLiteral('b'),
      new RegexLiteral('@gmail'),
      new RegexLiteral('.com')
    );
    expect(r.toRegexString()).to.equal('gillyb@gmail\\.com');
  });

  it('simple sequence with quantifier', () => {
    const r = new RegexSequence(
      new RegexLiteral('gillyb'),
      RegexLiteral.anyDigit().optional()
    ).atLeastAmount(3);
    expect(r.toRegexString()).to.equal('(gillyb\\d?){3,}');
  });

  it('complex sequence', () => {
    const r = new RegexSequence(
      new Group(
        new Or(
          RegexLiteral.anyDigit().exactAmount(3),
          RegexLiteral.anyDigit().exactAmount(6)
        ), 'group1'),
      RegexLiteral.anyLetter().upToAmount(6),
      Group.nonCapturing(new RegexLiteral('gillyb').optional())
    );
    expect(r.toRegexString()).to.equal('(?<group1>(\\d{3}|\\d{6}))[a-zA-Z]{1,6}(?:(gillyb)?)');
  });

});