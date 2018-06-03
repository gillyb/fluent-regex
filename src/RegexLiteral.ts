import RegexComponent from "./RegexComponent";

export class RegexLiteral extends RegexComponent {

  private regexString: string;

  private regexEscapeCharacters = /\.|\^|\$|\*|\+|\?|\(|\)|\[|\{|\}|\\|\|/g;

  constructor(regexString: string, escapeSpecialCharacters: boolean = true) {
    super();
    if (escapeSpecialCharacters)
      this.regexString = regexString.replace(this.regexEscapeCharacters, '\\$&');
    else
      this.regexString = regexString;
    return this;
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