import { RegexFlags } from "./RegexFlags";

export default abstract class RegexComponent {

  protected regexQuantifier: string;

  private assertSingleQuantifier() {
    if (this.regexQuantifier)
      throw `Only a single quantifier can be used.\nYou already defined a quantifier for this component (${this.regexQuantifier})`;
  }

  optional() {
    this.assertSingleQuantifier();
    this.regexQuantifier = '?';
    return this;
  }
  onceOrMore() {
    this.assertSingleQuantifier();
    this.regexQuantifier = '+';
    return this;
  }
  zeroOrMore() {
    this.assertSingleQuantifier();
    this.regexQuantifier = '*';
    return this;
  }

  exactAmount(amount: number) {
    this.assertSingleQuantifier();
    this.regexQuantifier = '{' + amount + '}';
    return this;
  }
  atLeastAmount(amount: number) {
    this.assertSingleQuantifier();
    this.regexQuantifier = `{${amount},}`;
    return this;
  }
  rangeAmount(min: number, max: number) {
    this.assertSingleQuantifier();
    this.regexQuantifier = `{${min},${max}}`;
    return this;
  }
  upToAmount(amount: number) {
    return this.rangeAmount(1, amount);
  }

  abstract toRegexString: () => string;
  
  toRegex = (...flags: RegexFlags[]) => {
    return new RegExp(this.toRegexString(), flags.join(''));
  };
}