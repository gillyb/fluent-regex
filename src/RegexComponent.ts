export default abstract class RegexComponent {

  protected regexQuantifier: string;

  optional() {
    this.regexQuantifier = '?';
  }
  onceOrMore() {
    this.regexQuantifier = '+';
  }
  zeroOrMore() {
    this.regexQuantifier = '*';
  }

  exactAmount(amount: number) {
    // TODO: throw error if there's no regex yet
    // TODO: make sure there isn't a quantifier defined already
    this.regexQuantifier = '{' + amount + '}';
    return this;
  }
  upToAmount(amount: number) {
    // TODO: throw error if there's no regex yet
    // TODO: make sure there isn't a quantifier defined already
    this.regexQuantifier = `{,${amount}}`;
    return this;
  }
  atLeastAmount(amount: number) {
    this.regexQuantifier = `{${amount},}`;
    return this;
  }

  abstract toRegexString: () => string;
  
  toRegex = () => {
    return new RegExp(this.toRegexString());
  };
}