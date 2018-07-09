import RegexComponent from "./RegexComponent";

export interface RegexLiteralConfiguration {
  escapeSpecialCharacters?: boolean;
}
const defaultConfig = {
  escapeSpecialCharacters: true
};

export default class RegexLiteral extends RegexComponent {

  private regexString: string;
  private options: RegexLiteralConfiguration = Object.assign({}, defaultConfig);

  private regexEscapeCharacters = /\.|\^|\$|\*|\+|\?|\(|\)|\[|\{|\}|\\|\|/g;

  constructor(regexString: string, options?: RegexLiteralConfiguration) {
    super();
    Object.assign(this.options, options);

    if (this.options.escapeSpecialCharacters)
      this.regexString = regexString.replace(this.regexEscapeCharacters, '\\$&');
    else
      this.regexString = regexString;
    return this;
  }

  static anyDigit() {
    return new this('\\d', { escapeSpecialCharacters: false });
  }
  static anyNonDigit() {
    return new this('\\D', { escapeSpecialCharacters: false });
  }
  static anyLetter() {
    return new this('[a-zA-Z]', { escapeSpecialCharacters: false });
  }
  static anyWhitespace() {
    return new this('\\s', { escapeSpecialCharacters: false });
  }
  static anyNonWhitespace() {
    return new this('\\S', { escapeSpecialCharacters: false });
  }
  static anyWordCharacter() {
    return new this('\\w', { escapeSpecialCharacters: false });
  }
  static anyNonWordCharacter() {
    return new this('\\W', { escapeSpecialCharacters: false });
  }
  static anyCharacterExceptNewline() {
    return new this('.', { escapeSpecialCharacters: false });
  }

  toRegexString = () => {
    const q = this.regexQuantifier ? this.regexQuantifier : '';
    if (!this.needsWrapping(this.regexString))
      return `${this.regexString}${q}`;

    return `(${this.regexString})${q}`;
  }

}