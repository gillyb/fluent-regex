import RegexComponent from "./RegexComponent";

export interface RegexLiteralConfiguration {
  // wrap?: boolean;
  escapeSpecialCharacters?: boolean;
}
const defaultConfig = {
  // wrap: true,
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
    return new this('\\d', { escapeSpecialCharacters: false });
  }
  static anyLetter() {
    return new this('[a-zA-Z]', { escapeSpecialCharacters: false });
  }
  static anyWhitespace() {
    return new this('\\s', { escapeSpecialCharacters: false });
  }

  private needsWrapping(): boolean {
    if (!this.regexQuantifier)
      return false;

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

    return true;
  };

  toRegexString = () => {
    if (!this.needsWrapping())
      return `${this.regexString}${this.regexQuantifier ? this.regexQuantifier : ''}`;

    return `(${this.regexString})${this.regexQuantifier}`;
  }

}