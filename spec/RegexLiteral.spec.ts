import * as mocha from 'mocha';
import * as chai from 'chai';

import { RegexLiteral } from '../src/RegexLiteral';

const expect = chai.expect;
const assert = chai.assert;

describe('RegexLiteral', () => {

  it('specific word', () => {
    const r = new RegexLiteral('gillyb');
    expect(r.toRegexString()).to.equal('gillyb');
  });

  it('with special characters', () => {
    const r = new RegexLiteral('gilly{b} and a slash\\');
    expect(r.toRegexString()).to.equal('gilly\\{b\\} and a slash\\\\');
  });

  it('single digit', () => {
    const r = RegexLiteral.anyDigit();
    expect(r.toRegexString()).to.equal('\\d');
  });
  it('digit with quantifier', () => {
    const r = RegexLiteral.anyDigit().exactAmount(3);
    expect(r.toRegexString()).to.equal('\\d{3}');
  });

  it('single character', () => {
    const r = RegexLiteral.anyLetter();
    expect(r.toRegexString()).to.equal('[a-zA-Z]');
  });
  it('single character with quantifier', () => {
    const r = RegexLiteral.anyLetter().upToAmount(2);
    expect(r.toRegexString()).to.equal('[a-zA-Z]{1,2}');
  });

});