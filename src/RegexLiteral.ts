import RegexComponent from "./RegexComponent";

export interface RegexLiteralConfiguration {
  wrap?: boolean;
  escapeSpecialCharacters?: boolean;
}
const defaultConfig = {
  wrap: true,
  escapeSpecialCharacters: true
};

export class RegexLiteral extends RegexComponent {

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
    return new this('\\d', { escapeSpecialCharacters: false, wrap: false });
  }
  static anyLetter() {
    return new this('[a-zA-Z]', { escapeSpecialCharacters: false, wrap: false });
  }
  static anyWhitespace() {
    return new this('\\s', { escapeSpecialCharacters: false, wrap: false });
  }

  toRegexString = () => {
    if (this.options.wrap)
      return `(${this.regexString})${this.regexQuantifier ? this.regexQuantifier : ''}`;
    return `${this.regexString}${this.regexQuantifier ? this.regexQuantifier : ''}`;
  }

}