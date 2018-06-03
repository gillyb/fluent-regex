export default abstract class RegexComponent {

  protected regexQuantifier: string;

  private assertSingleQuantifier() {
    if (this.regexQuantifier)
      throw `Only a single quantifier can be used.\nYou already defined a quantifier for this component (${this.regexQuantifier})`;
  }

  // TODO: BUG: If the literal is longer than a single character, then we need to wrap it in parentheses before adding a quantifier

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
  upToAmount(amount: number) {
    this.assertSingleQuantifier();
    this.regexQuantifier = `{,${amount}}`;
    return this;
  }
  atLeastAmount(amount: number) {
    this.assertSingleQuantifier();
    this.regexQuantifier = `{${amount},}`;
    return this;
  }

  abstract toRegexString: () => string;
  
  toRegex = () => {
    return new RegExp(this.toRegexString());
  };
}