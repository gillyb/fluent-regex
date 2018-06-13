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

  protected needsWrapping = function(regexString: string) {
    if (this.regexString.length === 1)
      return false;
  
    // This will catch strings that are wrapped in squared brackets
    // it will catch [xxxx] and fail on this [xxx][xxx]
    // but it will also fail on this: [xxx[x]xxx] // TODO: fix this! 
    if (this.regexString.startsWith('[') && this.regexString.endsWith(']') && this.regexString.indexOf(']') === this.regexString.length - 1)
      return false;
  
    // Comment above, applies here as well! // TODO: fix this!
    if (this.regexString.startsWith('(') && this.regexString.endsWith(')') && this.regexString.indexOf(')') === this.regexString.length - 1)
      return false;
  
    if (this.regexString.startsWith('\\') && this.regexString.length === 2)
      return false;
  
    if (!this.regexQuantifier)
      return false;

    return true;
  }

  abstract toRegexString: () => string;
  
  toRegex = (...flags: RegexFlags[]) => {
    return new RegExp(this.toRegexString(), flags.join(''));
  };
}