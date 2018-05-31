import RegexComponent from "./RegexComponent";

export class RegexLiteral extends RegexComponent {

  private regexString: string;

  private matchEscapeCharacters = /\.|\^|\$|\*|\+|\?|\(|\)|\[|\{|\}|\\|\|/g;

  constructor(regexString: string, escapeSpecialCharacters: boolean = true) {
    super();
    if (escapeSpecialCharacters)
      this.regexString = regexString.replace(this.matchEscapeCharacters, '\\$&');
    else
      this.regexString = regexString;
  }

  static anyDigit() {
    return new this('\\d', false);
  }
  static anyLetter() {
    return new this('[a-zA-Z]', false);
  }
  static anyWhitespace() {
    return new this('\\s', false);
  }

  toRegexString = () => {
    return this.regexString + (this.regexQuantifier ? this.regexQuantifier : '');
  }

}