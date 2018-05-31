import { RegexComponent } from "./RegexComponent";

export class RegexLiteral implements RegexComponent {

  private regexString: string;
  private regexQuantifier: string;

  private matchEscapeCharacters = /\.|\^|\$|\*|\+|\?|\(|\)|\[|\{|\}|\\|\|/g;

  constructor(regexString: string, escapeSpecialCharacters: boolean = true) {
    if (escapeSpecialCharacters)
      this.regexString = regexString.replace(this.matchEscapeCharacters, '\\$&');
    else
      this.regexString = regexString;
  }

  toRegexString() {
    return this.regexString + (this.regexQuantifier ? this.regexQuantifier : '');
  }
  toRegex() {
    return new RegExp(this.toRegexString());
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

  static anyDigit() {
    return new this('\\d', false);
  }
  static anyLetter() {
    return new this('[a-zA-Z]', false);
  }

}