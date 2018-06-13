import RegexComponent from "./RegexComponent";
import RegexLiteral from "./RegexLiteral";

export default class Optional extends RegexComponent {

  private innerRegex: RegexComponent;

  constructor(regex: RegexComponent | string) {
    super();
    if (typeof regex === 'string')
      this.innerRegex = new RegexLiteral(regex);
    else
      this.innerRegex = regex;
  }

  toRegexString = () => {
    return `(${this.innerRegex.toRegexString()})?`;
  };

}