import { RegexComponent } from "./RegexComponent";

export class RegexLiteral implements RegexComponent {

  regexString: string;
  regexQuantifier: string;

  constructor(regexString: string) {
    this.regexString = regexString;
  }

  toRegexString() {
    return this.regexString;
  }
  toRegex() {
    return new RegExp(this.toRegexString());
  }

  exactAmount(amount: number) {
    this.regexQuantifier = `{${amount}}`;
    return this;
  }
  upToAmount(amount: number) {
    this.regexQuantifier = `{,${amount}}`;
    return this;
  }

  static anyDigit() {
    return new this('\\d');
  }
  static anyLetter() {
    return new this('[a-zA-Z]');
  }

}